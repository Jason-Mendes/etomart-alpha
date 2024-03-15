import React, { useState, useEffect } from 'react';
import { Button, Img, Text } from '../components';


function LandingPage() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  //Location buttons stuff  
  const [isEditing, setIsEditing] = useState(false);
  const [location, setLocation] = useState('');
  const [numStars] = useState(5); // State for the number of stars
  const [currentSlide, setCurrentSlide] = useState(0);
  //Regions stuff
  const regions = [
    { code: 'ALB', name: 'Khomas', flagPath: '/images/regions/khomas.jpeg' },
    { code: 'HRV', name: 'Erongo', flagPath: '/images/regions/erongo.jpeg' },
    { code: 'CYP', name: 'Oshana', flagPath:  '/images/regions/oshana.jpeg' },
    { code: 'ALB', name: 'Omusati ', flagPath:  '/images/regions/omusati.jpeg' },
    { code: 'HRV', name: 'Karas', flagPath: '/images/regions/kharas2.jpeg' },
    { code: 'CYP', name: 'Ohangwena', flagPath: '/images/regions/ohangwena.jpeg' },
    { code: 'ALB', name: 'Zambezi', flagPath: '/images/regions/zambezi.jpeg' },
    { code: 'HRV', name: 'Oshikoto', flagPath: '/images/regions/oshikoto.jpeg' },
    { code: 'CYP', name: 'Omaheke', flagPath: '/images/regions/omaheke.jpeg' },
    { code: 'ALB', name: 'Hardap', flagPath: '/images/regions/hardap.jpeg' },
    { code: 'HRV', name: 'Otjozondjupa', flagPath: '/images/regions/otjozondjupa.jpeg' },
    { code: 'CYP', name: 'Kunene', flagPath: '/images/regions/kunene2.jpeg' },
    { code: 'ALB', name: 'Kavango East', flagPath: '/images/regions/kavango east.jpeg' },
    { code: 'HRV', name: 'Kavango West', flagPath: '/images/regions/kavango west.jpeg' }
  ];

  const testimonials = [
    {
      imageSrc: 'images/img_ellipse1.png',
      textBelowImage: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.',
      numStars: 5,
      testimonialAuthor: 'John Doe',
      
    },
    {
      imageSrc: 'images/img_ellipse1.png',
      textBelowImage: 'Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.',
      numStars: 1,
      testimonialAuthor: 'John Doe',
      
    },
    // Add more testimonials as needed
  ];


  //   //what is etomart stuff
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // //what is etomart stuff
  // const handlePlayVideo = () => {
  //   setIsVideoPlaying(!isVideoPlaying);
  // };

  
  //hide etomart video stuff 
  // Get the button element
// const button = document.querySelector('#text_button_image button');

// // Get the div to be hidden
// const divToHide = document.getElementById('text_button_image');


// // Add event listener to the button
// button.addEventListener('click', function() { 
//   // Hide the div
//   divToHide.style.display = 'none';
// });

  const handleClick = (url) => {
    // Handle the click event here
    // You can navigate to the URL or perform any other action
    console.log('Clicked URL:', url);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    // Initial call to set screen size
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //Location buttons stuff  

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the location data here
    setIsEditing(false);
  };

  // // render starts testimonials container
  // const TestimonialComponent = () => {
  //   const [numStars, setNumStars] = useState(5);
  // };
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  return (
    <div id="Landing_Page_Main_Body" className="content-wrapper ">
      <div className="overflow-hidden">
        {/* Hero Section */}
        {/* Orange Section */}
        <div id="LP_section_1_orange" className=" flex-col sm:flex-col justify-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[150px] rounded-br-[180px] rounded-tr-[180px] shadow-xl relative md:h-auto md:p-10 h-auto p-10" style={{ width: '100%', maxWidth: '100vw', margin: '0 auto' }}>
          {/* This is a style for the orange section to just be in the center when you zoom out and not span the whole page style={{ width: '100%', maxWidth: '1260px', margin: '0 auto' }}> */}
          {/* Orange Content section  */}
          <div id="text_1_image_container" className=' flex items-center justify-evenly md:items-center overflow-hidden md:gap-6 lg:gap-16 xl:gap-20 2xl:gap-72 sm:mr-16 md:mr-0 mr-0'>
            <div id="text_1_container" className="flex justify-center flex-grow md:-mt-20 p-6 ml-6">
              {/* First is large screens, second is normal to small screens*/}
              {isLargeScreen ? (
                <Text className="sm:text-2xl text-nowrap mt-2  md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-black-900 font-Agbalumo font-bold">
                  Your Daily Food <br /> Delivered <br /> Hot & Fresh
                </Text>
              ) : (
                <Text className="text-2xl  text-nowrap mt-2 mr-6  text-black-900 font-Agbalumo font-bold">
                  Your Daily Food <br /> Delivered <br /> Hot & Fresh
                </Text>
              )}
            </div>

            <div id="text_2_image_container" className='flex flex-col '>

              <div id="image_container">
                <Img className="object-cover rounded-bl-[200px] rounded-br-[126px] rounded-tr-[200px] mb-4 w-60 h-auto md:w-screen md:h-60 lg:w-screen lg:h-64 xl:w-screen xl:h-72 2xl:w-screen 2xl:h-80" src="images/Main_groceries_reverse.jpg" loading="lazy" />
              </div>
              {/* Wrap the additional content in a separate div */}
              <div id="text_2_container_show_large_screens" className="hidden sm:hidden md:block lg:block xl:block 2xl:block">
                <div className="flex justify-center mt-4">
                  <p className="text-sm md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-josefin_sans font-bold">Groceries, Meals, Pharmacies, anything!</p>
                </div>
              </div>
            </div>
          </div>
          <div id="text_2_container_show_small_screens" className="md:hidden lg:hidden xl:hidden 2xl:hidden">
            <div className="flex justify-center mt-4">
              <p className="text-xl sm:text-xl md:text-2xl text-white font_josefin-sans  font-bold">Groceries, Meals, Pharmacies, anything!</p>
            </div>
          </div>
        </div>
        {/* Location stuff */}
        <div id="LP_location_buttons_container_2" className="flex items-center justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start p-8 mx-auto sm:max-w-full md:max-w-screen lg:max-w-screen xl:max-w-screen 2xl:max-w-screen" style={{ maxWidth: '1800px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* different styling method to make it start at the end of the page<div  id="location_buttons_container" className=" bg-white flex items-center p-5 m-8" style={{ width: '100%', maxWidth: '1260px', margin: '0 auto' }}>*/}
          <div className="button-group flex items-start ">
            <div className="button-row flex flex-col gap-4 items-center justify-center md:items-start lg:items-start xl:items-start 2xl:items-start mb-4">
              {/* Button 1 */}
              <Button className="flex items-center bg-white text-black px-4 py-2 ml-0 rounded-[36px] shadow-lg pr-8 font-josefin_sans border border-slate-200" onClick={handleEditClick}>
                <img className="h-7 mr-2" src="images/img_linkedin.svg" alt="linkedin" loading="lazy" />
                <p className={`text-left md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:text-lg text-xl text-gray-700 font-bold ${isEditing ? 'hidden' : ''}`}>What's your Address?</p>
                <input className={`text-left md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:text-lg text-xl text-gray-700 font-bold focus:outline-none ${!isEditing ? 'hidden' : ''}`} type="text" value={location} onChange={handleInputChange} />
              </Button>

              {/* Button 2 */}
              <Button className="flex items-center bg-white text-black px-4 py-2 ml-0 rounded-[36px] shadow-lg pr-8 font-josefin_sans border border-slate-200" onClick={handleSaveClick}>
                <img className="h-5 mr-2" src="images/img_save.svg" alt="save" loading="lazy" />
                <p className="text-left md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl sm:text-sm text-base text-gray-600 font-bold">Use Current Location</p>
              </Button>
            </div>
          </div>
        </div>

        {/* Location stuff ends */}

        {/* Location stuff*/}
        {/* <div  id="location_buttons_container" className=" bg-white flex items-center p-5 m-8" style={{ width: '100%', maxWidth: '1260px', margin: '0 auto' }}>
          <div className="button-group flex flex-col items-start">
            <div id="location_buttons_1_container" className="button-row flex items-center mb-6">
              <Button className="flex items-center bg-white text-black px-4 py-2 ml-4 rounded-[36px] shadow-lg pr-8 font-montserrat border border-slate-100">
                <img className="h-7 mr-2" src="images/img_linkedin.svg" alt="linkedin" loading="lazy"></img>
                <p className="text-left md:text-3xl sm:text-[28px] text-[32px] text-gray-700 font-bold">What's your Address?</p>
              </Button>
            </div>
            {/* current Location stuff
            <div id="location_buttons_1_container" className="button-row flex mt-2">
              <Button className="flex items-center bg-white text-black px-4 py-2 ml-4 rounded-[36px] shadow-lg pr-8 font-montserrat border border-slate-100">
                <img className="h-5 mr-2" src="images/img_save.svg" alt="save" loading="lazy" />
                <p className="text-left md:text-lg sm:text-[28px] text-[32px] text-gray-600 font-bold">Use Current Location</p>
              </Button>
            </div>
          </div>
        </div> */}
        {/* Locations */}
        {/* Conditional Rendering based on Screen Size */}

        <div id="LP_section_3_orange" className=" flex-col sm:flex-col justify-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[150px] rounded-br-[150px] shadow-xl relative md:h-auto md:p-10 h-auto p-10" style={{ width: '100%', maxWidth: '100vw', margin: '0 auto' }}>
          <div className="text-container whitespace-nowrap sm:whitespace-wrap md:whitespace-wrap lg:whitespace-wrap xl:whitespace-wrap sd:mt-2 mt-2 md:mt-4">
            {isLargeScreen ? (
              <Text className="sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-black-900 font-Agbalumo sm:ml-16 sm:mr-0 md:mr-20 md:ml-14 md:py-0 lg:mt-0 lg:my-0 md:pr-4">
                Explore Etomart Regions
              </Text>
            ) : (
              <Text className="flex justify-center text-2xl text-black-900 font-Agbalumo font-bold ">
                Explore Etomart Regions
              </Text>
            )}
          </div>
          <div className="text-container whitespace-nowrap sm:whitespace-wrap md:whitespace-wrap lg:whitespace-wrap xl:whitespace-wrap sd:mt-2 mt-0 md:mt-4">
            {isLargeScreen ? (
              <Text className="text-1xl sm:text-1xl md:text-1xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-josefin_sans mt-0 mb-4 sm:ml-16 sm:mr-0 md:mr-20 md:ml-14">
                Delivered to you at your convenience!
              </Text>
            ) : (
              <Text className="flex justify-center text-1xl text-white font-josefin_sans ">
                Delivered to you at your convenience!
              </Text>
            )}
 {/* Regions Buttons */}<div id='button sizing' className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-44 py-2 px-16">
  {regions.map((country, index) => (
    <div key={country.code} className="flex justify-start">
      <div className="button-row flex flex-col gap-4 mb-4 w-full">
        <Button
          className={`flex flex-shrink-0 justify-between items-center bg-white text-black px-4 py-2 ml-0 rounded-[36px] shadow-lg font-josefin_sans border border-slate-200 min-w-[280px] overflow-hidden`}
          onClick={() => handleClick(`/en/${country.code.toLowerCase()}`)}
        >
          <div className="flex items-center flex-grow">
            <img
              className="rounded-[36px] h-10 mr-2 flex-shrink-0"
              src={country.flagPath}
              alt={`${country.name} flag`}
              loading="lazy"
            />
            <p className="text-left text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 font-bold flex-shrink-0">
              {country.name}
            </p>
          </div>
          <div className="ml-auto pr-2 flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-6 fill-current text-gray-600"
            >
              <g fill="none" fillRule="evenodd">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M16.5 18a.498.498 0 01-.37-.836L20.824 12 16.13 6.836a.499.499 0 11.74-.672l5 5.5a.5.5 0 010 .672l-5 5.5a.498.498 0 01-.37.164"
                  fill="#202125"
                />
              </g>
            </svg>
          </div>
        </Button>
      </div>
    </div>
  ))}
</div>

 {/* Regions Buttons ends*/}
</div>
</div>
<div id="LP_Did_you_know_container_4" class="flex flex-col gap-[35px] items-center justify-start w-auto md:w-full pt-16 pb-6">
    <div class="flex flex-col items-center justify-center px-2.5 py-[3px] w-auto">
    <p class="text-left md:text-5xl text-6xl text-gray-800 w-auto font-bold font-Agbalumo">Did you Know?</p>
  </div>
  <div class="flex flex-col items-center justify-center px-2.5 py-[3px] w-auto">
    <p class="text-center sm:text-[21px] md:text-[23px] text-[25px] max-w-xl text-gray-600_01 font-josefin_sans font-semibold">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
    </div></div>



    <div
          id="LP_section_3_orange"
          className="flex flex-col items-center justify-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[150px] rounded-br-[150px] shadow-xl relative md:p-10 p-5"
          style={{ width: '100%', maxWidth: '100vw', margin: '0 auto' }}
        >
          <div
            id="text_button_image"
            className="flex flex-col md:flex-row justify-center items-center gap-8  p-4"
          >
            <div className="flex items-center justify-center w-full md:w-1/2 px-4 md:px-0">
              <div id="text" className="relative max-w-3xl p-4 md:p-16 text-center">
                <h2 className="text-2xl md:text-5xl font-Agbalumo font-bold text-black mb-4">
                  What is Etomart?
                </h2>
                <p className="text-base md:text-xl text-white font-medium mb-8">
                  Etomart makes it incredibly easy for you to discover and get what you
                  want. Delivered to you – quickly, reliably and affordably.
        </p>
        <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold shadow-md hover:bg-slate-300 transition-colors duration-300">
          <span>Watch Video</span>
        </button>
      </div>
    </div>
    <div
      id="card"
      className="flex flex-wrap justify-center gap-6 w-full md:w-1/2 p-4 md:px-0"
    >
      <div className="bg-white w-full md:w-auto h-full bg-cover bg-center rounded-lg flex flex-col items-center py-4 md:py-[21px] px-4 md:px-[21px]  max-w-[200px] sm:max-w-[300px] md:max-w-[400px] max-h-[200px] sm:max-h-[300px] md:max-h-[450px] shadow-md">
        <div className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-none max-h-[200px] sm:max-h-[300px] md:max-h-[400px]">
          <img
            className="w-full h-auto rounded-xl"
            src="images/website_intro/video-cover-image-4.jpg"
            alt="web_intro"
          />
        </div>
      </div>
    </div>
  </div>
</div>








<div id="LP_testimonials_container_4" className="flex flex-col gap-[35px] items-center justify-start w-auto md:w-full pt-16 pb-6">
  <div className="flex flex-col items-center justify-center px-2.5 py-[3px] w-auto">
    <p className="text-left sm:text-[21px] md:text-[23px] text-[25px] text-orange-500 w-auto font-bold font-shrikhand">Testimonials</p>
  </div>
  <div className="flex flex-col items-center justify-center px-2.5 py-[3px] w-auto">
    <p className="text-left md:text-5xl text-6xl text-gray-800 w-auto font-bold font-Agbalumo">What Others Are Saying</p>
  </div>
  <div className="flex flex-col items-center justify-center px-2.5 py-[3px] w-auto">
    <p className="text-center sm:text-[21px] md:text-[23px] text-[25px] max-w-xl text-gray-600_01 font-josefin_sans font-semibold">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
  </div>
  {/* Slideshow */}
  <div className="flex items-center justify-center relative overflow-hidden w-full">
    {/* Slides */}
    <div className="flex transition-transform duration-500 ease-in-out transform">
      {testimonials.map((testimonial, index) => (
        <div key={index} className={`h-[454px] md:h-auto items-center justify-center max-w-[928px] p-2.5 rounded-[30px] shadow-bs3 w-full ${currentSlide === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
          <div className="flex flex-col items-center justify-center px-6 py-6 w-auto">
            <img className="flex items-center justify-center h-[117px] md:h-auto rounded-[50%] w-[117px]" src={testimonial.imageSrc} alt={`Testimonial ${index + 1}`} />
          </div>
          <div className="flex flex-row items-center justify-center  w-auto">
            
            <div className="flex items-center justify-center p-4 "> {/* Button container */}
              {/* Controls */}
              <button onClick={handlePrevSlide} className="p-4 bg-white border border-slate-200 shadow-lg  w-8 h-8 flex items-center justify-center focus:outline-none z-10">
                &lt;
              </button>
              <div className="flex flex-col items-center justify-center p-6  w-auto">
              <p className="text-center sm:text-[21px] md:text-[23px] text-[25px] max-w-xl text-gray-600_01 font-josefin_sans font-semibold">{testimonial.textBelowImage}</p>
            </div>
              <button onClick={handleNextSlide} className="p-4 bg-white border border-slate-200 shadow-lg  w-8 h-8 flex items-center justify-center focus:outline-none z-10">
                &gt;
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 items-center w-full">
            <div className="flex flex-col items-center justify-center px-6 py-6 w-auto">
              <div className="flex flex-wrap justify-center gap-6 items-center g-white-A700 flex-col p-3 rounded-[30px] shadow-bs3 w-full">
                <div className='flex flex-wrap justify-center gap-4 items-center g-white-A700 flex-row p-2 shadow-bs3 w-full'>
                  {Array.from({ length: testimonial.numStars }, (_, starIndex) => (
                    <div key={starIndex} className="flex flex-wrap justify-center items-center" style={{ width: '40px', height: '40px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M9.70801 36.6667L12.4163 24.9583L3.33301 17.0833L15.333 16.0417L19.9997 5L24.6663 16.0417L36.6663 17.0833L27.583 24.9583L30.2913 36.6667L19.9997 30.4583L9.70801 36.6667Z" fill="#FE9E0D" />
                        </g>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-2.5 py-[3px] w-auto">
                <p className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-auto font-josefin_sans font-semibold">{testimonial.testimonialAuthor}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


          <div id="LP_section_5_orange" className="flex-col sm:flex-col justify-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[150px] rounded-br-[150px] shadow-xl relative md:h-auto md:p-10 h-auto p-10" style={{ width: '100%', maxWidth: '100vw', margin: '0 auto' }}>
            <div className="flex flex-col items-center w-full mb-8">
              <div id="how-it-works" className="flex flex-col items-center justify-center px-2.5 py-[3px] w-auto">
                <p className="text-left md:text-5xl text-6xl text-black w-auto font-bold font-Agbalumo">How it Works?</p>
              </div>
              <div id="how-it-works-text" className="flex flex-col items-center justify-center px-2.5 pt-6 pb-6 w-auto">
                <p className="text-center sm:text-[21px] md:text-[23px] text-[25px] max-w-xl text-white font-josefin_sans font-semibold">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
              </div>
            </div>
            <div id="cards" className="flex flex-wrap justify-center gap-6">
              <div className="bg-white flex flex-col items-center py-[21px] rounded-[20px] shadow-md w-[300px] h-[320px]">
                <img className="h-[96px] w-[96px] mb-4" src="images/img_materialsymbol.svg" alt="materialsymbol" />
                <div className="text-center p-2">
                  <p id="title" className="text-xl text-gray-800_02 font-bold mb-2">Order at Your convenience</p>
                  <div className="text-center p-2">
                    <p id="body" className="text-base text-gray-800_03 font-semibold">Browse through a wide selection of restaurants and shops, and order your favorite meals, groceries, or other essentials.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center py-[21px] rounded-[20px] shadow-md w-[300px] h-[320px]">
                <img className="h-[96px] w-[96px] mb-4" src="images/img_mdicursorpointer.svg" alt="mdicursorpointe" />
                <div className="text-center p-2">
                  <p id="title" className="text-xl text-gray-800_02 font-bold mb-2">Fast Delivery</p>
                  <div className="text-center p-2">
                    <p id="body" className="text-base text-gray-800_03 font-semibold">Etomart's fleet of delivery partners ensures your order arrives quickly, so you can enjoy your meals or items wherever and whenever</p>
                  </div>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center py-[21px] rounded-[20px] shadow-md w-[300px] h-[320px]">
                <img className="h-[96px] w-[96px] mb-4" src="images/img_mditruckdelivery.svg" alt="mditruckdeliver" />
                <div className="text-center p-2">
                  <p id="title" className="text-xl text-gray-800_02 font-bold mb-2">Convenient Tracking</p>
                  <div className="text-center p-2">
                    <p id="body" className="text-base text-gray-800_03 font-semibold">Track your order in real-time through the Etomart site, so you always know when your delivery is on its way.</p>
                  </div>
                </div>
              </div>
            </div></div>

        
  <section className="hero-section">
          {/* Hero Slider or Static Image */}
        </section>
        {/* Search Functionality Section */}
        <section className="search-bar">
          {/* Search Input */}
        </section>
        {/* Featured Products or Categories Section */}
        <section className="featured-products">
          {/* Dynamically list featured products or categories */}
        </section>
        {/* Testimonials or Reviews Section */}
        <section className="testimonials">
          {/* Display user testimonials */}
        </section>
        {/* Call to Action Section */}
        <section className="cta">
          {/* <Link to="/products" className="btn btn-primary">Shop Now</Link> */}
        </section>
        {/* Footer Section */}
        <footer className="site-footer">
          {/* Footer Content */}
        </footer>
        {/* Hero Slider Section */}
        <section className="hero-section">
          {/* Hero Slider or Static Image */}
        </section>
        {/* Search Functionality Section */}
        <section className="search-bar">
          {/* Search Input */}
        </section>
        {/* Featured Products or Categories Section */}
        <section className="featured-products">
          {/* Dynamically list featured products or categories */}
        </section>
        {/* Testimonials or Reviews Section */}
        <section className="testimonials">
          {/* Display user testimonials */}
        </section>
        {/* Call to Action Section */}
        <section className="cta">
          {/* <Link to="/products" className="btn btn-primary">Shop Now</Link> */}
        </section>
        {/* Footer Section */}
        <footer className="site-footer">
          {/* Footer Content */}
        </footer>
      </div>


    </div>

  );
}

export default LandingPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Img, Text } from '../components';

// function LandingPage() {
//   return (
//     <div className="font-montserrat">
//       {/* Hero Section */}
//       <div className="w-full">
//         <div className="flex flex-col justify-end pt-0 w-full">
//           <div className="flex-col relative w-full h-[696px] md:h-[600px] sm:h-[947px]">
//             <div className="flex justify-between items-center bg-yellow-400 border border-solid border-white-A700_19 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl shadow-2xl h-full m-auto"
//               style={{ height: '570px' }}>
//               <div className="absolute top-5 my-4 ml-4 mr-4 mt-0 px-6">
//                 <div className="mt-0 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-0">
//                   <Text className="text-5xl text-black-900 w-96">
//                     Your Daily Food <br /> Delivered <br /> Hot & Fresh
//                   </Text>
//                   <div className="flex justify-end md:ml-5">
//                     <Img className="object-cover rounded-bl-3xl rounded-br-3xl" src="images/img_istockphoto141.png" loading="lazy" style={{ width: '500px', height: '400px' }} />
                 
//                   <Text className="text-3xl text-white absolute top-[450px] left-[30px] md:left-[40px]">
//                     Groceries, Meals, Pharmacies, anything!
//                   </Text>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Location stuff */}
//       <div className="container flex items-center p-5 m-8">
//         <div className="button-group flex flex-col items-center">
//           <div className="button-row flex shadow">
//             <Button className="bg-slate-900 text-white px-4 py-2 ml-4 rounded-md ">Button 1</Button>
//           </div>
//           <div className="button-row flex mt-2">
//             <Button className="bg-amber-600 text-white px-4 py-2 rounded-md">Button 6</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Img, Text } from '../components';

// function LandingPage() {
//   return (
//     <div className="font-montserrat">
//       {/* Hero Section */}
//       <div className="bg-white-A700 w-full">
//         <div className="flex flex-col justify-end pt-0 w-full">
//           <div className="flex-col relative w-full h-[696px] md:h-[703px] sm:h-[947px]">
//             <div className="flex justify-between items-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px] shadow-bs h-full m-auto"
//             style={{ height: '570px' }}>
//               <div className="absolute top-[5%] w-[100%] my-4 ml-4 mr-4 mt-0 px-6">
//                 <div className="mt-0 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-6">
//                   <Text className="text-5xl text-black-900" style={{ width: '900px', height: '170px' }}>
//                     Your Daily Food <br/> Delivered <br/> Hot & Fresh
//                   </Text>
//                   <div className="flex justify-end md:ml-5">
//                     <Img className="object-cover rounded-bl-[200px] rounded-br-[126px] rounded-tr-[200px]" src="images/img_istockphoto141.png" loading="lazy" style={{ width: '1500px', height: '400px' }} />
//                   </div>
//                 </div>
//                 <Text className="text-3xl text-white absolute top-[450px] left-[30px] md:left-[40px]"
//                 style={{ width: '600px', height: '40px', marginLeft: '35rem' }}>
//                   Groceries, Meals, Pharmacies, anything!
//                 </Text>
//               </div>
//             </div>
//             <div className="flex flex-col justify-start w-[32%] md:w-full ml-14 md:ml-0">
//               <div className="flex flex-col justify-start w-full gap-[60px] md:gap-10">
//                 {/* Additional Components */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Hero Slider Section */}
//       <section className="hero-section">
//         {/* Hero Slider or Static Image */}
//       </section>
      
//       {/* Search Functionality Section */}
//       <section className="search-bar">
//         {/* Search Input */}
//       </section>
      
//       {/* Featured Products or Categories Section */}
//       <section className="featured-products">
//         {/* Dynamically list featured products or categories */}
//       </section>
      
//       {/* Testimonials or Reviews Section */}
//       <section className="testimonials">
//         {/* Display user testimonials */}
//       </section>
      
//       {/* Call to Action Section */}
//       <section className="cta">
//         <Link to="/products" className="btn btn-primary">Shop Now</Link>
//       </section>
      
//       {/* Footer Section */}
//       <footer className="site-footer">
//         {/* Footer Content */}
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;


















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Img, List, Text } from '../components';
// // Additional imports for components like HeroSlider, FeaturedProducts, Testimonials

// function LandingPage() {
//   return (
//     <div className=''>
//      <div className="bg-white-A700 font-montserrat w-full">
//   <div className="flex flex-col justify-end pt-0 w-full">

//       <div className="flex-col relative w-full h-[696px] md:h-[703px] sm:h-[947px]">
//         <div className="flex justify-between items-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px] shadow-bs h-full m-auto "
//          style={{ width: 'auto', height: '550px' }}>
//         <div className="absolute top-[5%] w-[100%] my-4 ml-4 mr-4  mt-0  px-6  ">
          
//           <div className="mt-0 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-6">
//                 <Text className="w-full text-left text-5xl text-black-900 my-4 mr-0 "
//                 style={{ width: '00px', height: '170px' }}>
//                   Your Daily Food <br/> Delivered <br/> Hot & Fresh
//                 </Text>
//                 <div class="flex justify-content:flex-end md:ml-5">

//                 <Img
//                   className=" object-cover rounded-bl-[200px] rounded-br-[126px] rounded-tr-[200px] "
//                   src="images/img_istockphoto141.png"
//                   loading="lazy"
//                   style={{ width: '1500px', height: '400px' }}
//                 />
//               </div>
//               </div>
//               <Text className="text-3xl md:text-[30px] sm:text-[30px] text-white absolute top-70 left-30 md:ml-40" 
//               style={{ width: '600px', height: '40px', marginLeft: '35rem' }}>           
//     Groceries, Meals, Pharmacies, anything!
// </Text>          
//         </div>
//       </div>
//       <div className="flex flex-col justify-start w-[32%] md:w-full ml-14 md:ml-0">
//         <div className="flex flex-col justify-start w-full gap-[60px] md:gap-10">
//           <div className="bg-white-A700 rounded-[36px] shadow-bs1 p-[9px] flex flex-col items-center justify-end w-full ">
//             <div className="flex items-center justify-start gap-[53px] mt-[7px] w-[88%] md:w-full">
//               <Img className="h-[67px]" src="images/img_linkedin.svg" alt="LinkedIn"/>
//               <Text className="text-[32px] md:text-3xl text-gray-600">
//                 What's your Address?
//               </Text>
//             </div>
//           </div>
//           <div className="relative w-[78%] sm:w-full h-[60px] md:h-[57px] ml-[37px] md:ml-0">
//             <div className="bg-white-A700 rounded-[30px] shadow-bs1 p-[7px] flex items-start justify-end w-full h-full">
//               <Img className="h-[41px] mt-0.5 w-[42px]" src="images/img_save.svg" alt="Save"/>
//             </div>
//             <Text className="absolute top-[12%] right-[2%] text-[32px] md:text-3xl text-amber-700">
//               Use Current Location
//             </Text>
//           </div>
//         </div>
//       </div>
//     </div>

// </div>
// </div>

        
//       {/* Hero Section */}
//       <section className="hero-section">
//         {/* Hero Slider or Static Image */}
//       </section>
      
//       {/* Search Functionality */}
//       <section className="search-bar">
//         {/* Search Input */}
//       </section>
      
//       {/* Featured Products or Categories */}
//       <section className="featured-products">
//         {/* Dynamically list featured products or categories */}
//       </section>
      
//       {/* Testimonials or Reviews */}
//       <section className="testimonials">
//         {/* Display user testimonials */}
//       </section>
      
//       {/* Call to Action */}
//       <section className="cta">
//         <Link to="/products" className="btn btn-primary">Shop Now</Link>
//       </section>
      
//       {/* Footer */}
//       <footer className="site-footer">
//         {/* Footer Content */}
//       </footer>
//       </div>
//   );
// }

// export default LandingPage;
