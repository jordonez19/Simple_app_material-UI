import {makeStyles} from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
    container:{
        marginTop:45,
        marginBottom:45,
        background:theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon:{
        marginRight:'20px',
        
    },
    btn:{
        marginRight:'0px',
        
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column',
    },
    media:{
        paddingTop:'56.25%'
    },
    CardContent:{
        flexGrow:1
    },
    footer:{
        margin:25
    }
}));

export default useStyle;