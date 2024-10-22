import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'

const Signin = () => {
  return (
    <ScrollView style={styles.main} contentContainerStyle={styles.scrollContent}>

      {/* Signin Section */}
      <View style={styles.body1}>
        <Text style={styles.head}>Signin</Text>

        <Text style={styles.creates}>
          New user? <Text style={styles.createAcc}>Create an account</Text>
        </Text>

        {/* Email Field */}
        <Text style={styles.email}>Email address</Text>
        <TextInput style={styles.emailFeild} placeholder="Enter your email" />

        {/* Continue Button */}
        <View style={styles.contDiv}>
          <TouchableOpacity style={styles.continue}>
            <Text style={styles.contText}>Continue</Text>
          </TouchableOpacity>
        </View>

        {/* "OR" Divider */}
        <View style={styles.orLine}>
          <View style={styles.line} />
          <Text style={styles.text}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Social Login Options */}
        <View style={styles.social}>
          <TouchableOpacity style={styles.google}>
            <Text style={styles.contText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fb}>
            <Text style={styles.contText}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.apple}>
            <Text style={styles.contText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider}>
  <Text style={styles.dividerText}>OR</Text>
</View>


      {/* Explore Section */}
      <View style={styles.body2}>
        
        <Text style={styles.exploreText}>Explore Now</Text>
        <Text style={styles.joinText}>Join us today</Text>

        <TouchableOpacity style={styles.authButton}>
          <Text style={styles.buttonText1}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authButton}>
          <Text style={styles.buttonText1}>Sign Up with Apple</Text>
        </TouchableOpacity>

        <View style={styles.orLine}>
          <View style={styles.line} />
          <Text style={styles.text}>or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.alreadyText}>Already have an account?</Text>

        <TouchableOpacity style={styles.authButton}>
          <Text style={styles.buttonText2}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By signing up, you agree to the{' '}
          <Text style={styles.linkText}>Terms of Service</Text>,{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>, and{' '}
          <Text style={styles.linkText}>Cookie Use</Text>.
        </Text>
      </View>

    </ScrollView>
  )
}

export default Signin
