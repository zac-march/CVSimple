import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Preview from "./components/Preview";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import autofillState from "./components/utils/autofill";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.removeData = this.removeData.bind(this);
    this.autoFill = this.autoFill.bind(this);

    this.child = React.createRef();
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

  removeData(formType, formKey) {
    this.setState((prevState) => {
      const stateCopy = { ...prevState[formType] };

      delete stateCopy[formKey];

      return { [formType]: stateCopy };
    });
    console.log(this.state);
  }

  autoFill() {
    renderAdditionalForms(this.child.current);

    setInterval(function () {
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
    }, 3);

    function renderAdditionalForms(child) {
      const multiForms = ["education", "experience", "skills"];
      multiForms.forEach((form) => {
        const formCount = Object.keys(autofillState[form]).length;
        for (let i = 1; i < formCount; i++) {
          child.handleAdd(undefined, form);
        }
      });
    }

    function setFormData(form, formType, i) {
      const formArr = Array.prototype.slice.call(form);
      const values = Object.values(
        autofillState[formType][Object.keys(autofillState[formType])[i]]
      );
      formArr.forEach((input, index) => {
        setInput(input, values[index]);
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
    html2canvas(input).then((canvas) => {
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
    return (
      <div className="App">
        <Header savePreview={this.savePreview} autoFill={this.autoFill} />
        <Forms
          ref={this.child}
          handleChange={this.handleChange}
          removeData={this.removeData}
        />
        <Preview data={this.state} />
      </div>
    );
  }
}

export default App;
