$(document).ready(function () {



            // Landing Page SignupForm

            $('#signupForm').isHappy({
                    fields: {
                        '#displayName': {
                            required: true,
                            message: 'Might we inquire your name ?'
                        },

                        '#email': {
                            required: true,
                            message: 'Please provide your email?',
                        },

                        '#age': {
                            required: true,
                            message: 'Please select your age.',
                        },

                        '#gender': {
                            required: true,
                            message: 'Please select either male or female.',
                        },


                         '#password': {
                            required: true,
                            message: 'Please enter a password'
                        }

                       
                    }
                });









                // Signup page

                $('#signUpFormPage').isHappy({
                    fields: {
                        '#displayName_1': {
                            required: true,
                            message: 'Might we inquire your name ?'
                        },

                        '#age_1': {
                            required: true,
                            message: 'Please provide your age.',
                        },

                        '#email_1': {
                            required: true,
                            message: 'Please provide your email ',
                        },

                         '#password_1': {
                            required: true,
                            message: 'Please enter a password.'
                        }

                       


                        

                        
                    }
                });

                

                 $('#signInFormPage').isHappy({
                    fields: {
  
                        '#email_login': {
                            required: true,
                            message: 'Please provide your email?',
                        },

                       
                         '#password_login': {
                            required: true,
                            message: 'Please enter a password'
                        }

                        
                    }
                });


                  $('#contactForm').isHappy({
                    fields: {
  
                        '#contactName': {
                            required: true,
                            message: 'Please provide your name.',
                        },

                       
                         '#contactEmail': {
                            required: true,
                            message: 'Please provide your email address.'
                        },

                         '#contactMessage': {
                            required: true,
                            message: 'Please write your message here.'
                        }

                        
                    }
                });


                 







               
            });


