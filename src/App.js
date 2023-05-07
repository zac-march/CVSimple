import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Preview from "./components/Preview";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import autofillState from "./utils/autofill";
import inViewport from "in-viewport";
import downIcon from "./images/down-arrow.svg";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.removeData = this.removeData.bind(this);
    this.autoFill = this.autoFill.bind(this);

    this.formsComponent = React.createRef();
  }

  handleChange = (e) => {
    const [itemKey, groupKey] = e.target.id.split("_");
    const formType = e.target.parentElement.dataset.type;

    this.setState((prevState) => {
      const stateCopy = { ...prevState[formType] };

      if (!stateCopy[groupKey]) {
        stateCopy[groupKey] = {};
      }

      const updatedGroupKey = {
        ...stateCopy[groupKey],
        [itemKey]: e.target.value,
      };

      const updatedState = {
        ...stateCopy,
        [groupKey]: updatedGroupKey,
      };

      return { [formType]: updatedState };
    });
  };

  resetState() {
    this.setState(() => {
      return { education: {}, experience: {}, skills: {} };
    });
  }

  removeData(formType, formKey) {
    this.setState((prevState) => {
      const stateCopy = { ...prevState[formType] };

      delete stateCopy[formKey];

      return { [formType]: stateCopy };
    });
  }

  autoFill() {
    this.formsComponent.current.resetState();
    this.setState(() => {
      return { education: {}, experience: {}, skills: {} };
    });

    renderAdditionalForms(this.formsComponent.current);

    setTimeout(function () {
      const forms = document.querySelectorAll("form");

      let formCount = 0;
      let prevFormType;

      forms.forEach((form) => {
        const formType = form.dataset.type;

        if (formType !== prevFormType) formCount = 0;
        else formCount++;
        setFormData(form, formType, formCount);
        prevFormType = formType;
      });
    }, 50);

    function renderAdditionalForms(formsComponent) {
      const multiForms = ["education", "experience", "skills"];
      multiForms.forEach((form) => {
        const formCount = Object.keys(autofillState[form]).length;
        for (let i = 1; i < formCount; i++) {
          formsComponent.handleAdd(undefined, form);
        }
      });
    }

    function setFormData(form, formType, i) {
      const formArr = Array.prototype.slice.call(form);
      const autofillValues = Object.values(
        autofillState[formType][Object.keys(autofillState[formType])[i]]
      );
      formArr.forEach((input, index) => {
        setInput(input, autofillValues[index]);
      });
    }

    function setInput(el, value) {
      const InputClass = el.constructor.name;
      var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window[InputClass].prototype,
        "value"
      ).set;
      nativeInputValueSetter.call(el, value);
      var event = new Event("input", { bubbles: true });
      el.dispatchEvent(event);
    }
  }

  savePreview() {
    const input = document.getElementById("preview");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      // Make img fit to PDF proportions
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Download PDF to user
      pdf.save("resume.pdf");
    });
  }

  render() {
    let previewElem = document.querySelector("#preview");
    document.addEventListener("scroll", () => {
      if (!previewElem) previewElem = document.querySelector("#preview");
      const visibleProp = inViewport(previewElem) ? "hidden" : "visible";
      document.querySelector(".scroll-to-preview").style.visibility =
        visibleProp;
    });

    return (
      <div className="App">
        <a
          className="scroll-to-preview"
          href="#preview"
          alt="Scroll to preview"
        >
          <button>
            <p>Go to preview</p>
            <img src={downIcon} alt="Scroll icon"></img>
          </button>
        </a>
        <div className="sidebar">
          <Header savePreview={this.savePreview} autoFill={this.autoFill} />
          <Forms
            ref={this.formsComponent}
            handleChange={this.handleChange}
            removeData={this.removeData}
          />
        </div>
        <Preview data={this.state} />
      </div>
    );
  }
}

export default App;
