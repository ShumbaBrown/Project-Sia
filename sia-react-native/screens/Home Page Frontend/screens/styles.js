const styles = {
  header:{
    backgroundColor: "#003f5c",
    height:200,
  },
  container:
    {
        flex: 1,
        backgroundColor: '#003f5c' 
    },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"white",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "white",
    fontWeight: "600"
  },
  id:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width: 1000,
    borderRadius:30,
    borderWidth: 1,
    borderColor: "#003f5c",
    backgroundColor: "#003f5c",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  buttonText2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#00BFFF'
  },
  achievement: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
  },
}

export default styles