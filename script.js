let converterDB = {
	biomarkers: {
		0: 'Insulin',
		1: {name:'Glucose',
			unit: [ ['mmol/l',1], ['mg/dl',18.01559] ],
			}
	},
	units: {
		0: 'mmol/l',
		1: 'mg/dl'
	}
};

function converter(biomarker, convertFrom, convertTo, value){
	//convert(1, 0, 1, 5) = 90.07795 mg/dl
	//convert(1, 1, 0, 90.07795) = 5 mmol/l
	//Проверяем аргументы, чтобы все были валидными
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

	let marker = converterDB.biomarkers[biomarker].name;
	let unitFrom = converterDB.biomarkers[biomarker].unit[convertFrom][0]
	let unitTo = converterDB.biomarkers[biomarker].unit[convertTo][0]
	let convFrom = converterDB.biomarkers[biomarker].unit[convertFrom][1];
	let convTo = converterDB.biomarkers[biomarker].unit[convertTo][1];
	let result = value * convTo/convFrom;
	
	console.log('Результат(' + marker + '): ' + value + ' ' + unitFrom + ' = ' + result + ' ' + unitTo);
	return result;
} 
