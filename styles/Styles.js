import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 10,
  },
  headerContainer: {
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    margin: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff', 
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  centerContent: {
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  button: {
    marginTop: 20,
    backgroundColor: '#1e88e5',
    margin: 15,
  },
  segmentedButtons: {
    padding: 10
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
  },
  listItemBox: {
    backgroundColor: '#60a6d1',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 5,
  },
  iconAndTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  exerciseType: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  detailText: {
    fontSize: 25,
    marginBottom: 5,
    color: '#fff',
  },
  formBox: {
    backgroundColor: '#f7fafa',
    borderRadius: 15,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    margin: 5,
  },
  settingsItem: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  setbuttons: {
    margin: 20
  },
  calendar: {
    marginVertical: 10,
    borderRadius: 10,  
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  dateButton: {
    backgroundColor: '#1e88e5',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },


});
