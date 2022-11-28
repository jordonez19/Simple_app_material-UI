import React from "react";
import { 
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardActionArea,
    CardMedia,
    CssBaseline,
    Button,
    Grid,
    Toolbar,
    Container
} from "@material-ui/core";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import  useStyle from "./Styles";

const cards = [1,2,3,4,5,6,7,8,9]

const App = () =>{
    const classes = useStyle();
    return(
        <>
            <CssBaseline />
            <AppBar  position="relative">
                <Toolbar>
                    <PhotoCameraIcon className={classes.icon} />
                    <Typography variant= "h6">
                        Photo album
                    </Typography>
                </Toolbar>
            </AppBar >
            <main>
                <div>
                    <Container maxWidth="sm" className = {classes.container}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia iusto ipsum dicta incidunt dignissimos, minima rem. Corporis est aperiam fugiat architecto temporibus suscipit. Dicta ipsa, vel ipsam quae sit perferendis eligendi reiciendis ut quidem doloremque dignissimos dolor rerum quis qui quo tempora. Asperiores, repellat officia aliquid neque doloribus facilis molestiae.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button className={classes.btn} variant="contained" color="primary" >See Photo</Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.btn} variant="outlined" color="primary">Second Action</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            <Container>
                <Grid container  spacing={4}>
                    {cards.map ((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card} >
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1668439151861-aa1bcd5bee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                title="Contemplative Reptile"
                                />
                                <CardContent
                                className={classes.CardContent}
                                >
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            
            </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom color="textSecondary">
                    something to show
                </Typography>

            </footer>
        </>
    )
}

export default App;
