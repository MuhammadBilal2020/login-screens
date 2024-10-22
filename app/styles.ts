import { StyleSheet } from 'react-native'

let styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f0ecf3',
  },
  scrollContent: {
    paddingBottom: 50, // Adds padding at the bottom for scroll
  },
  body1: {
    padding: 20,
    marginTop: 50,
  },
  head: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  creates: {
    marginTop: 10,
  },
  createAcc: {
    color: 'blue',
    fontWeight: 'bold',
  },
  email: {
    marginTop: 40,
    fontSize: 15,
  },
  emailFeild: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  contDiv: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  continue: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contText: {
    color: 'white',
  },
  orLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'gray',
  },
  social: {
    marginTop: 25,
  },
  google: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  fb: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  apple: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },

// divider 
divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 140,  // Space between the two sections
  },
  
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  
  line2: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  

  // Explore section
  body2: {
    padding: 20,
    marginTop: 140,
  },
  exploreText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  joinText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  authButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
  },
  createButton: {
    backgroundColor: '#A1C4FD',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 30,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alreadyText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 80,
  },
  linkText: {
    fontWeight: 'bold',
    color: '#333',
  },
})

export default styles
