const signupValidation=(name,value)=>{  // name of form field and it's value
    switch (name) {
        case "name" : 
            if(value.length === 0) return "Name is required.";
            else return "";
        case "email":
            if(value.length === 0) return "Email is required.";
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
                return "Email is invalid";
            return "";
        case "password" :
            if(value.length === 0) return "Password is required";
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)) 
                return "Password must contain be 8-15 characters with an uppercase, a lowercase, a number and a special character."
          return "";
        default : return "";
    } 
}

const loginValidation=(name,value)=>{
    switch(name) {
        case "email" : 
            if(value.length == 0) return "Email is required";
            return "";
        case "password": 
            if(value.length == 0) return "Password is required";
            return "";
        default : 
            return "";
    }
}
export {signupValidation , loginValidation};