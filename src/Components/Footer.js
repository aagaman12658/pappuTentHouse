export default (props) => {

    const footerNavs = [
        { title: "Home", path: "javascript:void(0)", onClick: props['scrollToHome'] },
        { title: "Services", path: "javascript:void(0)", onClick: props['scrollToServicesSection']  },
        { title: "Images", path: "javascript:void(0)", onClick: props['scrollToImageGallery']  },
        { title: "Videos", path: "javascript:void(0)", onClick: props['scrollToVideoGallery']  },
        { title: "FAQ's", path: "javascript:void(0)", onClick: props['scrollToFaqSection']  },
        { title: "Contact Us", path: "javascript:void(0)", onClick:props['scrollToContactUs']}
    ]

  return (
    <div>
      <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8 pt-56">
          <div className="max-w-lg sm:mx-auto sm:text-center">
          <a href="javascript:void(0)" onClick={props['scrollToHome']} className='font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                        PAPPU TENT HOUSE.
                    </a>
              <p className="leading-relaxed mt-2 text-[15px]">
              Thank you for choosing Pappu Tent House, where each event is a canvas of elegance. Your trust in us is the foundation of unforgettable celebrations. Cheers to crafting cherished memories together!
              </p>
          </div>
          <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
              {
                  footerNavs.map((item, idx) => (
                      <li className=" hover:text-gray-800">
                          <a key={idx} href={item.path} onClick={item.onClick}>
                              { item.title }
                          </a>
                      </li>
                  ))
              }
          </ul>
          <div className="mt-8 items-center justify-between sm:flex">
              <div className="mt-4 sm:mt-0">
                  &copy; 2022 Float UI All rights reserved. <a href="https://www.fuzon.org" target="__blank" className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Crafted with elegance by Fuzon</a>
              </div>
              <div className="mt-6 sm:mt-0">
                  <ul className="flex items-center space-x-4">
                      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                          <a href="https://www.facebook.com/" target="__blank">
                              <svg className="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                  <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                              </svg>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <style jsx>{`
              .svg-icon path,
              .svg-icon polygon,
              .svg-icon rect {
                  fill: currentColor;
              }
          `}</style>
      </footer>
      </div>
  )
}
