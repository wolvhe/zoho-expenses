import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-import-reports',
  templateUrl: './import-reports.component.html',
  styleUrls: ['./import-reports.component.css']
})
export class ImportReportsComponent implements OnInit {
  email: string = 'email@example.com';

  constructor(private reportService: ReportServiceService) { }

  ngOnInit(): void {
  }


  encodingOptions: string[] = ["UTF-8 (Unicode)", "UTF-16 (Unicode)"]
  encodingValue:any
  options: string[] = []
  dateFormatOptions: string[] = ['MM-dd-yyyy', 'yyyyy.mm.dd', 'dd-MM-yyyy', 'yyyyMMdd', 'yy.MM.dd', 'MM/dd/yy']
  unMappedValues:number = 35

  mappedOptions:any = {}

  isReportNameSelected:boolean = false
  getReportName(value:string) {
    // console.log(value);
    this.mappedOptions["reportName"] = value
    if (!this.isReportNameSelected) {
      this.unMappedValues -= 1
      this.isReportNameSelected = true
    }
  } 

  isReportNumberSelected:boolean = false
  getReportNumber(value:string) {
    this.mappedOptions["reportNumber"] = value
    if (!this.isReportNumberSelected) {
      this.unMappedValues -= 1
      this.isReportNumberSelected = true
    }
  }

  isBusinessPurposeSelected:boolean = false
  getBusinessPurpose(value:string) {
    this.mappedOptions["businessPurpose"] = value
    if (!this.isBusinessPurposeSelected) {
      this.unMappedValues -= 1
      this.isBusinessPurposeSelected = true
    }
  }

  isStartDateSelected:boolean = false
  getStartDate(value:string) {
    this.mappedOptions["businessPurpose"] = value
    if (!this.isStartDateSelected) {
      this.unMappedValues -= 1
      this.isStartDateSelected = true
    }
  }

  getStartDateFormat(value:string) {
    this.mappedOptions["startDateFormat"] = value
  }

  isEndDateSelected:boolean = false
  getEndDate(value:string) {
    this.mappedOptions["endDate"] = value
    if (!this.isEndDateSelected) {
      this.unMappedValues -= 1
      this.isEndDateSelected = true
    }
  }

  getEndDateFormat(value:string) {
    this.mappedOptions["endDateFormat"] = value
  }

  isReportTypeSelected:boolean = false
  getReportType(value:string) {
    this.mappedOptions["reportType"] = value
    if (!this.isReportTypeSelected) {
      this.unMappedValues -= 1
      this.isReportTypeSelected = true
    }
  }

  isApproversEmailSelected:boolean = false
  getApproversEmail(value:string) {
    this.mappedOptions["approversEmail"] = value
    if (!this.isApproversEmailSelected) {
      this.unMappedValues -= 1
      this.isApproversEmailSelected = true
    }
  }

  isExpenseDateSelected:boolean = false
  getExpenseDate(value:string) {
    this.mappedOptions["expenseDate"] = value
    if (!this.isExpenseDateSelected) {
      this.unMappedValues -= 1
      this.isExpenseDateSelected = true
    }
  }

  getExpenseDateFormat(value:string) {
    this.mappedOptions["expenseDateFormat"] = value
  }

  isExpenseCurrencyCodeSelected:boolean = false
  getExpenseCurrencyCode(value:string) {
    this.mappedOptions["expenseCurrencyCode"] = value
    if (!this.isExpenseCurrencyCodeSelected) {
      this.unMappedValues -= 1
      this.isExpenseCurrencyCodeSelected = true
    }
  }
  
  isLocationSelected:boolean = false
  getLocation(value:string) {
    this.mappedOptions["location"] = value
    if (!this.isLocationSelected) {
      this.unMappedValues -= 1
      this.isLocationSelected = true
    }
  }
  
  isExpenseRateSelected:boolean = false
  getExpenseRate(value:string) {
    this.mappedOptions["expenseRate"] = value
    if (!this.isExpenseRateSelected) {
      this.unMappedValues -= 1
      this.isExpenseRateSelected = true
    }
  }

  isExchangeRateSelected:boolean = false
  getExchangeRate(value:string) {
    this.mappedOptions["exchangeRate"] = value
    if (!this.isExchangeRateSelected) {
      this.unMappedValues -= 1
      this.isExchangeRateSelected = true
    }
  }

  isMileageRateSelected:boolean = false
  getMileageRate(value:string) {
    this.mappedOptions["mileageRate"] = value
    if (!this.isMileageRateSelected) {
      this.unMappedValues -= 1
      this.isMileageRateSelected = true
    }
  }

  isDistanceSelected:boolean = false
  getDistance(value:string) {
    this.mappedOptions["distance"] = value
    if (!this.isDistanceSelected) {
      this.unMappedValues -= 1
      this.isDistanceSelected = true
    }
  }

  isEntryNumberSelected:boolean = false
  getEntryNumber(value:string) {
    this.mappedOptions["entryNumber"] = value
    if (!this.isEntryNumberSelected) {
      this.unMappedValues -= 1
      this.isEntryNumberSelected = true
    }
  }

  isMileageUnitSelected:boolean = false
  getMileageUnit(value:string) {
    this.mappedOptions["mileageUnit"] = value
    if (!this.isMileageUnitSelected) {
      this.unMappedValues -= 1
      this.isMileageUnitSelected = true
    }
  }

  isStartOdometerReadingSelected:boolean = false
  getStartOdometerReading(value:string) {
    this.mappedOptions["startOdometerReading"] = value
    if (!this.isStartOdometerReadingSelected) {
      this.unMappedValues -= 1
      this.isStartOdometerReadingSelected = true
    }
  }

  isEndOdometerReadingSelected:boolean = false
  getEndOdometerReading(value:string) {
    this.mappedOptions["endOdometerReading"] = value
    if (!this.isEndOdometerReadingSelected) {
      this.unMappedValues -= 1
      this.isEndOdometerReadingSelected = true
    }
  }

  isMileageTypeSelected:boolean = false
  getMileageType(value:string) {
    this.mappedOptions["mileageType"] = value
    if (!this.isMileageTypeSelected) {
      this.unMappedValues -= 1
      this.isMileageTypeSelected = true
    }
  }

  isMerchantNameSelected:boolean = false
  getMerchantName(value:string) {
    this.mappedOptions["merchantName"] = value
    if (!this.isMerchantNameSelected) {
      this.unMappedValues -= 1
      this.isMerchantNameSelected = true
    }
  }

  isReferenceSelected:boolean = false
  getReference(value:string) {
    this.mappedOptions["reference"] = value
    if (!this.isReferenceSelected) {
      this.unMappedValues -= 1
      this.isReferenceSelected = true
    }
  }

  isIsReimbursableSelected:boolean = false
  getIsReimbursable(value:string) {
    this.mappedOptions["isReimbursable"] = value
    if (!this.isIsReimbursableSelected) {
      this.unMappedValues -= 1
      this.isIsReimbursableSelected = true
    }
  }
  
  isIsBillableSelected:boolean = false
  getIsBillable(value:string) {
    this.mappedOptions["isBillable"] = value
    if (!this.isIsBillableSelected) {
      this.unMappedValues -= 1
      this.isIsBillableSelected = true
    }
  }
  
  isExpenseCustomerNameSelected:boolean = false
  getExpenseCustomerName(value:string) {
    this.mappedOptions["expenseCustomerName"] = value
    if (!this.isExpenseCustomerNameSelected) {
      this.unMappedValues -= 1
      this.isExpenseCustomerNameSelected = true
    }
  }
  
  isPaidThroughSelected:boolean = false
  getPaidThrough(value:string) {
    this.mappedOptions["paidThrough"] = value
    if (!this.isPaidThroughSelected) {
      this.unMappedValues -= 1
      this.isPaidThroughSelected = true
    }
  }
  
  isPaymentModeSelected:boolean = false
  getPaymentMode(value:string) {
    this.mappedOptions["paymentMode"] = value
    if (!this.isPaymentModeSelected) {
      this.unMappedValues -= 1
      this.isPaymentModeSelected = true
    }
  }
  
  isIsInclusiveTaxSelected:boolean = false
  getIsInclusiveTax(value:string) {
    this.mappedOptions["isInclusiveTax"] = value
    if (!this.isIsInclusiveTaxSelected) {
      this.unMappedValues -= 1
      this.isIsInclusiveTaxSelected = true
    }
  }
  
  isOwnersEmailSelected:boolean = false
  getOwnersEmail(value:string) {
    this.mappedOptions["ownersEmail"] = value
    if (!this.isOwnersEmailSelected) {
      this.unMappedValues -= 1
      this.isOwnersEmailSelected = true
    }
  }
  
  isExpenseCategorySelected:boolean = false
  getExpenseCategory(value:string) {
    this.mappedOptions["expenseCategory"] = value
    if (!this.isExpenseCategorySelected) {
      this.unMappedValues -= 1
      this.isExpenseCategorySelected = true
    }
  }
  
  isExpenseAmountSelected:boolean = false
  getExpenseAmount(value:string) {
    this.mappedOptions["expenseAmount"] = value
    if (!this.isExpenseAmountSelected) {
      this.unMappedValues -= 1
      this.isExpenseAmountSelected = true
    }
  }
  
  isExpenseProjectNameSelected:boolean = false
  getExpenseProjectName(value:string) {
    this.mappedOptions["expenseProjectName"] = value
    if (!this.isExpenseProjectNameSelected) {
      this.unMappedValues -= 1
      this.isExpenseProjectNameSelected = true
    }
  }
  
  isExpenseDescriptionSelected:boolean = false
  getExpenseDescription(value:string) {
    this.mappedOptions["expenseDescription"] = value
    if (!this.isExpenseDescriptionSelected) {
      this.unMappedValues -= 1
      this.isExpenseDescriptionSelected = true
    }
  }
  
  isTaxNameSelected:boolean = false
  getTaxName(value:string) {
    this.mappedOptions["taxName"] = value
    if (!this.isTaxNameSelected) {
      this.unMappedValues -= 1
      this.isTaxNameSelected = true
    }
  }
  
  isTaxPercentageSelected:boolean = false
  getTaxPercentage(value:string) {
    this.mappedOptions["taxPercentage"] = value
    if (!this.isTaxPercentageSelected) {
      this.unMappedValues -= 1
      this.isTaxPercentageSelected = true
    }
  }
  
  isTaxTypeSelected:boolean = false
  getTaxType(value:string) {
    this.mappedOptions["taxType"] = value
    if (!this.isTaxTypeSelected) {
      this.unMappedValues -= 1
      this.isTaxTypeSelected = true
    }
  }
  
  isExpenseTypeSelected:boolean = false
  getExpenseType(value:string) {
    this.mappedOptions["expenseType"] = value
    if (!this.isExpenseTypeSelected) {
      this.unMappedValues -= 1
      this.isExpenseTypeSelected = true
    }
  }
  

  reports:string[] = [] 
  mapValues() {
    for (let document in this.JSONreport) {
      // console.log(document);
      let report:any = new Object()
      for (let key in this.mappedOptions) {
        // console.log(key);
        // console.log(this.mappedOptions[key]);
        report[key] = this.JSONreport[document][this.mappedOptions[key]]
      }
      report["email"] = this.email
      report["status"] = "DRAFT"
      this.reports.push(report)
    }
    console.log(this.reports);
  }

  postMultipleReports() {
    this.mapValues()
    this.reportService.importBulkReports(this.reports).subscribe(res => {
      console.log(res);
      
    })
    
  }

  csvToArray(str:any, delimiter = ',') {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = rows.map(function (row:any) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object:any, header:any, index:any) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
    return arr;
  }
  
  convertFile = () => {
    const input:any = document.getElementById('fileInput');
  
    const reader:any = new FileReader();
    reader.onload = () => {
      let text = reader.result;
      let data = this.csvToArray(text)
      console.log(JSON.stringify(data));
    };
    reader.readAsText(input.files[0]);
    
  };

  files: File[] = []

  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer | any>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = e => {
        return resolve((e.target as FileReader).result)
      }

      reader.onerror = e => {
        console.error('filereader failed');
        return reject(null)
      }

      if (!file) {
        console.error('No file to read');
        return reject(null)
        
      }

      reader.readAsText(file)
    })
  }

  JSONreport: any

  onSelect(event:any) {
    // console.log(event);
    this.files.push(...event.addedFiles);

    this.readFile(this.files[0]).then(fileContents => {
      // console.log(fileContents);
      this.JSONreport = this.csvToArray(fileContents)
      for (var i in this.JSONreport) {
        // console.log(i);
        for (var j in this.JSONreport[i]) {
          // console.log(j);
          if (!(this.options.includes(j))) {
            this.options.push(j)
          }
        }
      }
      // console.log(this.csvToArray(fileContents));
      
    })
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
