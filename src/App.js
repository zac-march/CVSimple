import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Preview from "./components/Preview";
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.removeData = this.removeData.bind(this);
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
        <Header savePreview={this.savePreview} />
        <Forms handleChange={this.handleChange} removeData={this.removeData} />
        <Preview data={this.state} />
      </div>
    );
  }
}

export default App;
