let converterDB = {
	biomarkers: {
		0: 'Insulin',
		1: 'Glucose',
	},
	units_from: {
		0: 'mmol/l',
		1: 'mg/dl'
	},
	units_to: {
		0: 'mmol/l',
		1: 'mg/dl'
	}
};

//convert(1, 0, 1, 5)
function converter(biomarker, convertFrom, convertTo, value){
	if(isNaN(biomarker)){
    	return "Ошибка! Значение аргумента 'biomarker' не числовое!\n Решение: Введите валидное значение аргумента 'biomarker'";
    	}  
	if(isNaN(convertFrom)){
    	return "Ошибка! Значение аргумента 'convertFrom' не числовое!\n Решение: Введите валидное значение аргумента 'convertFrom'";
 	}
	if(isNaN(convertTo)){
    	return "Ошибка! Значение аргумента 'convertTo' не числовое!\n Решение: Введите валидное значение аргумента 'convertTo'";
 	}  	 
	if(isNaN(value)){
    	return "Ошибка! Значение аргумента 'value' не числовое!\n Решение: Введите валидное значение аргумента 'value'";
 	} 

	let marker = converterDB.biomarkers[biomarker];
	let convFrom = converterDB.units_from[convertFrom];
	let convTo = converterDB.units_to[convertTo];
	
	//return biomarker + ": " + value * convFrom / convTo;
	console.log("Мы ввели biomarker: " + biomarker)
	console.log("Мы ввели convertFrom: " + convertFrom)
	console.log("Мы ввели convertTo: " + convertTo)
	console.log("Мы ввели value: " + value)
	console.log("-----------------------------------------")
	console.log("Мы считаем " + marker + ". Переводим " + value + " " + convFrom + " в " + convTo )
} 


/*var Glucose_metrics = {
  "mmol/l" : 1,
  "mg/dl" : 18,01559
};

function convert(){
  var val = document.getElementById("fromVal").value;
  if(isNaN(val)){
    return;
  }  
  <!-- если проверка прошла успешно, выполняем преобразование -->
  document.getElementById("toVal").value = val * metrics[document.getElementById("fromSystem").value] /
     metrics[document.getElementById("toSystem").value];
}




function insulinConverter(insulinValueMMolL) {
  document.getElementById("outputMGPERDL").innerHTML=insulinValueMMolL*18.0156;
}

function converter(biomarker, convertFrom, convertTo, valueToConvert){
	if (biomarker === 0){
		if ((convertFrom === 0)&&(convertTo === 1)){
			let result = valueToConvert*18.0156
			return result;
			} else if ((convertFrom === 1)&&(convertTo === 0)) {
			let result = valueToConvert/18.0156
			return result;
		}
	}
} 
*/
