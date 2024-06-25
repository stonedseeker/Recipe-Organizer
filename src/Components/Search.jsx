
import { useState } from "react";
import { Grid, Form,Input } from "semantic-ui-react";


const Search = () => {

    const [value, setValue] = useState("")
    
    return (
        <div>
            <Grid columns={2} textAlign="center" className="search-box">
                <Grid.Column>
                    <h2 className="search-heading">
                        Search <span style={{color:'#2185D0'}}> Recipes </span>
                    </h2>
                    <h4>
                        Input Recipes Seperated By Comma
                    </h4>
                    <Form>
                        <Input 
                        action = {{icon: 'search', color: 'blue' }}
                        onChange={(e) => setValue(e.target.value)}
                        value = {value}
                        />
                            

                    </Form>
                </Grid.Column>
            </Grid>
            
        </div>
    )
}

export default Search;