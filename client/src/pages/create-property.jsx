import { useState } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import { FieldValues,  useForm } from "@pankod/refine-react-hook-form";

import {
    Box,
    Typography,
    FormControl,
    FormHelperText,
    TextField,
    TextareaAutosize,
    Stack,
    Select,
    MenuItem,
    Button,
} from "@pankod/refine-mui";



import CustomButton from '../components/common/CustomButton';


const CreateProperty1 = () => {
    
  

    // const [formData,setFormData] = useState(
    //     { title:"", description:"", propertyType:"", location:"", price:"", photo:"",email:"" } 
    // );
        
    // const [title, setTitle] = useState();
    // const [description, setDescription] = useState();
    // const [propertyType, setPropertyType] = useState();
    // const [location, setLocation] = useState();
    // const [price, setPrice] = useState();
    //!=================================================================================
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        type: '',
        location: '',
        price: ''
      });
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }
    
      const UploadProperty = event => {
        event.preventDefault();
        console.log(formData);
        // Here you can submit the form data to a server or do any necessary action
      



   
    //!=================================================================================
    const { data: user } = useGetIdentity();

    const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
    } = useForm();

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            // setImage(e.target.result);
            console.log(e.target.result);
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }



    // const uploadFormData =  (event)  => {
    //     event.preventDefault();
    //     if (!propertyImage.name) return alert("Please select an image");
          

    //     console.log({
    //         title:"", description:"", propertyType:"", location:"", price:"", 
    //         photo: propertyImage.url,
    //         email: user.email,
    //         })
    // };

    
   

    return (

        <Box  >
            <Typography fontSize={25} fontWeight={900} color="#11142d">
               Create a Property
            </Typography>

            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    onSubmit={UploadProperty}
                >
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 14,
                                color: "#11142d",
                            }}
                        >
                            Enter Property name
                        </FormHelperText>
                        <TextField
                            name="title"
                            value={formData.title}
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 14,
                                color: "#11142d",
                            }}
                        >
                            Enter Description
                        </FormHelperText>
                       
                        <textarea
                        
                            // minRows={5}
                            // maxRows={5}
                            name="description"
                            value={formData.description}
                            required
                            placeholder="Write description"
                            color="info"
                            onChange={handleInputChange}
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "14px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "#919191",
                            }}
                           
                        />
                    </FormControl>

                    <Stack direction="row" gap={4}>

                        <FormControl sx={{ flex: 1 }}   >
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 14,
                                    color: "#11142d",
                                }}
                            >
                                Select Property Type
                            </FormHelperText>                            

                            <Select
                                name="type"
                                value={formData.type}
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue="aparment"
                                onChange={handleInputChange}
                            >
                                <MenuItem value="apartment">Apartment</MenuItem>
                                <MenuItem value="villa">Villa</MenuItem>
                                <MenuItem value="farmhouse">farmhouse</MenuItem>
                                <MenuItem value="condos">Condos</MenuItem>
                                <MenuItem value="townhouse">Townhouse</MenuItem>
                                <MenuItem value="duplex">Duplex</MenuItem>
                                <MenuItem value="studio">Studio</MenuItem>
                                <MenuItem value="chalet">Chalet</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ flex:1}}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 14,
                                    color: "#11142d",
                                    
                                }}
                            >
                                Enter property price
                            </FormHelperText>
                            <TextField
                                name="price"
                                value={formData.price}
                                fullWidth
                                required
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                onChange={handleInputChange}
                            />
                        </FormControl>

                    </Stack>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 14,
                                color: "#11142d",
                            }}
                        >
                            Enter Location
                        </FormHelperText>
                        <TextField
                        name="location"
                        value={formData.location}
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"                            
                            onChange={handleInputChange}
                        />
                    </FormControl>

                    <Stack
                        direction="column"
                        gap={1}
                        justifyContent="center"
                        mb={2}
                    >
                        <Stack direction="row" gap={2}>
                            <Typography
                                color="#11142d"
                                fontSize={14}
                                fontWeight={500}
                                my="10px"
                            >
                                Property Photo
                            </Typography>

                            <Button
                                component="label"
                                sx={{
                                    width: "fit-content",
                                    borderRadius:"10px",
                                    color: "#475be8",
                                    textTransform: "capitalize",
                                    fontSize: 14,
                                }}
                            >
                                Upload *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={handleImageChange}
                                />
                            </Button>
                        </Stack>
                        <Typography
                            fontSize={12}
                            color="#808191"
                            sx={{ wordBreak: "break-all" }}
                        >
                            {propertyImage?.name}
                        </Typography>
                    </Stack>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        
                    />
                </form>
            </Box>
        </Box>
        // <Form
        //     type="Create"
        //     register={register}
        //     onFinish={onFinish}
        //     formLoading={formLoading}
        //     handleSubmit={handleSubmit}
        //     handleImageChange={handleImageChange}
        //     onFinishHandler={onFinishHandler}
        //     propertyImage={propertyImage}
        // />
    );
};

}
export default CreateProperty1;