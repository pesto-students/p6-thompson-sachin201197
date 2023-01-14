"use strict ";

const company1 = {
  companyName: "valtech",
  empID: 0,
  emplList: [],
  selected(empName, empID) {
    console.log(
      `${empName} is selected for the company ${
        this.companyName
      } and his EMP ID is ${empID + 1}`
    );

    this.emplList.push({ Name: `${empName}`, empID });
  },
};

const company2 = {
  companyName: "Oracle",
  empID: 0,
  emplList: [],
};

const selectedEmp = company1.selected;
selectedEmp.call(company1, "Sachin", (company1.empID = 0));
selectedEmp.call(company2, "August", (company1.empID = 0));

selectedEmp.apply(company2, ["Anjan", 13]);
selectedEmp.apply(company1, ["Anjgooglean", 13]);

const addEmp = selectedEmp.bind(company1);
addEmp("Murga", "23");
