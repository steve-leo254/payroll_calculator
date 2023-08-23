function find_gross_salary(basic_salary, benefits) {
    let gross_salary = basic_salary + benefits;
    return gross_salary;
}

function findHouseLevy(gross_salary, employeeLevyRate = 0.015, employerLevyRate = 0.015) {
    let employeeLevy = gross_salary * employeeLevyRate;
    let employerLevy = gross_salary * employerLevyRate;
    let totalLevy = employeeLevy + employerLevy;
    return totalLevy;
}

// ... other functions ...
function find_NHIF(gross_salary) {
    let nhif = 0;
    if (gross_salary == 0) {
        nhif = 0;
    }
    else if (gross_salary <= 5999) {
        nhif = 150;
    } else if (gross_salary >= 6000 && gross_salary <= 7999) {
        nhif = 300;
    } else if (gross_salary >= 8000 && gross_salary <= 11999) {
        nhif = 400;
    } else if (gross_salary >= 12000 && gross_salary <= 14999) {
        nhif = 500;
    } else if (gross_salary >= 15000 && gross_salary <= 19999) {
        nhif = 600;
    } else if (gross_salary >= 20000 && gross_salary <= 24999) {
        nhif = 750;
    } else if (gross_salary >= 25000 && gross_salary <= 29999) {
        nhif = 850;
    } else if (gross_salary >= 30000 && gross_salary <= 34999) {
        nhif = 900;
    } else if (gross_salary >= 35000 && gross_salary <= 39999) {
        nhif = 950;
    } else if (gross_salary >= 40000 && gross_salary <= 44999) {
        nhif = 1000;
    } else if (gross_salary >= 45000 && gross_salary <= 49999) {
        nhif = 1100;
    } else if (gross_salary >= 50000 && gross_salary <= 59999) {
        nhif = 1200;
    } else if (gross_salary >= 60000 && gross_salary <= 69999) {
        nhif = 1300;
    } else if (gross_salary >= 70000 && gross_salary <= 79999) {
        nhif = 1400;
    } else if (gross_salary >= 80000 && gross_salary <= 89999) {
        nhif = 1500;
    } else if (gross_salary >= 90000 && gross_salary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

function find_NSSF(gross_salary, rate = 0.06) {
    nssf = 0;
    if (gross_salary >=0 && gross_salary <= 18000) {
        nssf = gross_salary * rate;
    } else {
        nssf = 18000 * rate;
    }
    return nssf;
}

function findNHDF(gross_salary, amount = 0.03) {
    // let nhdf = gross_salary * amount;
    if(gross_salary <=83334 ){
        nhdf = gross_salary * amount;
    } else{
        nhdf =2500;
    }
    return nhdf;
}

function NSSF_NHDFtotal(nssf, nhdf) {
    let total = nssf + nhdf;
    return total;
}

function findtaxable_income(gross_salary, total) {
    let taxable_income = gross_salary - total;
    return taxable_income;
}

function findPAYEE(taxable_income, personal_relief = 2400) {
    netpayee = 0;
    if (taxable_income <= 24000) {
        grosspayee = 24000 * 0.1;
        netpayee = grosspayee - personal_relief;
    } else if (taxable_income <= 32333) {
        grosspayee = ((taxable_income - 24000) * 0.25) + 2400;
        netpayee = grosspayee - personal_relief;
    } else if (taxable_income <= 500000) {
        grosspayee = ((taxable_income - 32333) * 0.30) + 4483.25;
        netpayee = grosspayee - personal_relief;
    } else if (taxable_income > 500000) {
        grosspayee = ((taxable_income - 80000) * 0.35) + 4483.25;
        netpayee = grosspayee - personal_relief;
    } else {
        netpayee = 0;
    }
    return netpayee;
}

function findNetsalary(gross_salary, nhif, nhdf, nssf, netpayee) {
    let net_salary = gross_salary - (nhif + nhdf + nssf + netpayee);
    return net_salary;
}

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculate);
});

function calculate() {
    const basic_salary_input = document.getElementById("basic_salary");
    const basic_salary = parseFloat(basic_salary_input.value);
    // Define the benefits variable here
    const benefits = 0;  // You can replace this with the actual benefits value


    // Calculate calcGross using the find_gross_salary function
    let calcGross = find_gross_salary(basic_salary, benefits);

    // Calculate calcHouseLevy using the findHouseLevy function
    // let calcHouseLevy = findHouseLevy(calcGross);

    // Calculate other variables using your defined functions
    let calcNHIF = find_NHIF(calcGross);
    let calcNSSF = find_NSSF(calcGross);
    let calcNHDF = findNHDF(calcGross);
    let calcTotal = NSSF_NHDFtotal(calcNSSF, calcNHDF);
    let calcTaxable_income = findtaxable_income(calcGross, calcTotal);
    let calcPAYEE = findPAYEE(calcTaxable_income);
    let calcNetsalary = findNetsalary(calcGross, calcNHIF, calcNHDF, calcNSSF, calcPAYEE);

    // Display calculated values in HTML
    document.getElementById('displayGross').textContent = calcGross.toFixed(2);
    // document.getElementById('displaybasic').textContent = basic_salary.toFixed(2);
    document.getElementById('displayTaxable').textContent = calcTaxable_income.toFixed(2);
    document.getElementById('displayPAYE').textContent = calcPAYEE.toFixed(2);
    document.getElementById('displayNHIF').textContent = calcNHIF.toFixed(2);
    document.getElementById('displayNSSF').textContent = calcNSSF.toFixed(2);
    document.getElementById('displaynhdf').textContent = calcNHDF.toFixed(2); // Display House Levy
    document.getElementById('displayNetsalary').textContent = calcNetsalary.toFixed(2);
}