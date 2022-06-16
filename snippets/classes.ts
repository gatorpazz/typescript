abstract class Department {
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear = 2020;
  constructor(protected readonly id: string, public name: string) {
    
  }

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name }
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');

  }
  describe() {
    console.log(this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass a value')
    }
    this.addReport(value);
  }
  describe() {
    console.log(this.id);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', [])
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
  
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const accounting = new ITDepartment('d1', ['Matthew', 'Mark', 'Luke', 'John']);
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation();