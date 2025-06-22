//light version of low-dash;low-dash was quiet popular package but it was so heavy so bulky 
//used for validation;number as input->validate;npm install yup

import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
//form validation
import * as Yup from 'yup' // you can destructure it like (object,string,number,date,InferType)
import { Formik } from 'formik' //we need to keep track of state means when form is changed,submitted so formik exposes those msg to us directly;whatever events are handled and submit event occurs is passed to the state given by formik itself and through that state we manage everything
import BouncyCheckbox, { BouncyCheckboxHandle } from 'react-native-bouncy-checkbox'
import { BouncyCheckboxProps } from 'react-native-bouncy-checkbox'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4')
  .max(12, 'Should be max of 12')
  .required('Password Length is required')

})

export default function App() {
  const [password, setPassword] = useState('') //empty string,number or true or false;password(1st)is the variable and setPassword(2nd)is the function responsible to change the value of variable
  const [isPassGenerated, setisPassGenerated] = useState(false)
  const [lowerCase, setlowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, setnumbers] = useState(false)
  const [symbols, setsymbols] = useState(false)

  const GeneratePasswordString = (passwordLength: number) => {
    let CharacterList =  ''

    let upperCaseChars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCaseChars= 'abcdefghijklmnopqrstuvwxyz'
    let numberChars = '0123456789'
    let symbolsChars = '!@#$%^&*()_+{}:"<>?-=[];'

    if (upperCase) { //upper case true asel tr 
      CharacterList += upperCaseChars //characterlist madhe upper case character add karaycha
    }
    if (lowerCase) {
      CharacterList += lowerCaseChars
    }
    if (numbers) {
      CharacterList += numberChars
    }
    if (symbols) {
      CharacterList += symbolsChars
    }

    const passwordResult = createPassword(CharacterList, passwordLength) //passwordresult madhe create password function store/call honar aani tya madhe characterlist as character string aani passwordlength pass honar

    setPassword(passwordResult) //passwordresult madhun password set honar setpassword function through
    setisPassGenerated(true) //password aata generate zhal ahe mhanun verti flse lihilel ithe true lihil

  }

  const createPassword = (characters:string,passwordLength: number) => {
    //one string of characters will be provided and length of password needed for eg. 'abc@123',6 
    let result = ''
    //result is assigned and empty string initially
for (let i = 0; i < passwordLength; i++) {
  //using for loop till length of passsword that is 6 the loop will run
  const characterIndex = Math.round(Math.random() * characters.length)//only math.random will provide 0-1 value so we are multiplying it by character length so we get some nearly charcherlength value but not perfect so we round it 
  //math.random will pick random value from 0 to 1 and that will get multiplied by length of character so that it will not exced the limit and using math.round rounded to nearest positive value
  result += characters.charAt(characterIndex) //to avoid overwrite and keep on adding character to the string + is used
  //after getting that random value the character at that index will be fetched and stored in the result
}
return result
console.log("krupali");
  }

  const ResetPassword = () => {
    setPassword('')
    setisPassGenerated(false)
    setlowerCase(true)
    setupperCase(false)
    setnumbers(false)
    setsymbols(false)
    //varche sagle function aani tyachi initial value ji start la hoti ti lihaychi/pass karaychi ass reset 
  }

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}></SafeAreaView>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generator</Text>
            <View style={styles.fullContainer}>
              <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={values => {
          console.log(values); //to see what is coming in
          
          GeneratePasswordString(+values.passwordLength) //or you can use (number(values.passwordLength))
       }}
     >  
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputcolumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
          </View>
          <TextInput
            style={styles.inputstyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder='EX. 8'
            keyboardType='numeric'
            placeholderTextColor={"#ffffff"}
            />
         </View>
         <View style={styles.inputWrapper}>
            <Text style={styles.heading}>Include lowercase</Text>
            <View style={styles.changes}>
            <BouncyCheckbox
              useBuiltInState
              isChecked={lowerCase}
              onPress={() => setlowerCase (!lowerCase)} //use to toggle
              fillColor='#29AB87'
            />
            </View>
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include uppercase</Text>
          <View style={styles.changes}>
            <BouncyCheckbox
              useBuiltInState
              isChecked={upperCase}
              onPress={() => setupperCase (!upperCase)}
              fillColor='#ffff00'
            />
            </View>
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include numbers</Text>
          <View style={styles.changes}>
            <BouncyCheckbox
              useBuiltInState
              isChecked={numbers}
              onPress={() => setnumbers (!numbers)}
              fillColor='#00bcd4'

            />
            </View>
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include symbols</Text>
          <View style={styles.changes}>
            <BouncyCheckbox
              useBuiltInState
              isChecked={symbols}
              onPress={() => setsymbols (!symbols)}
              fillColor='#f44336'
            />
            </View>
         </View>

         <View style={styles.formActions}></View>
         <View style={styles.row}>
         <TouchableOpacity
         disabled={!isValid}
         style={styles.primaryBtn}
         onPress={handleSubmit}
         >
          <Text style={styles.primaryBtnTxt}>Generate Password</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={styles.secondarybtn}
          onPress={() => {
            handleReset()
            ResetPassword()
          }}
         >
          <Text style={styles.secondarybtntxt}>Reset</Text>
         </TouchableOpacity>
         </View>
         </>
       )}
     </Formik>
     </View>
          </View>
          {isPassGenerated ? (
            <View style={[styles.Card, styles.cardElevated]}>
              <View style={styles.subTitle}>
                <Text style={styles.resultTxt}>Result:</Text>
              </View>
              <View style={styles.description}>
                <Text style={styles.desTxt}>Long press to copy:</Text>
              </View>
              <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
            </View>
          ) : null}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
    color:"#ad1457",
    marginLeft: 45
  },
  resultTxt:{
    fontSize:13,
    fontWeight: 200,
    color:'#ffffff'
  },
  desTxt:{
    fontSize:13,
    fontWeight: 200,
    color:'#ffffff'
  },
  row:{
  flexDirection: 'row',         
  justifyContent: 'center',     
  alignItems: 'center',         //vertically center
  marginTop: 10,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
    color:'#ffffff'
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
    color:'#ffffff'
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputcolumn: {
    flexDirection: 'column',
  },
  inputstyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    //borderColor: '#16213e',
    borderColor:"#ffffff"

  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    //backgroundColor: '#5DA3FA', 
    backgroundColor:'#ffff00'
  },
  primaryBtnTxt: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: '700'
  },
  secondarybtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    //backgroundColor: '#5DA3FA',
    backgroundColor:'#ffff00',
    height:55,
    justifyContent:'center'
  },
  secondarybtntxt: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '700'
  },
  Card: {
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical:12
  },
  cardElevated: {
    backgroundColor: '#ad1457',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  changes:{
    paddingLeft: 30
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#ffffff'
  },
  fullContainer:{
    backgroundColor:'#ad1457',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius:8,
    padding: 6,
    height:300,
    marginVertical:10
  }
});