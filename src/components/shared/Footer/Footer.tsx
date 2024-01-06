import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import { SocialList } from "@/constants/SocialList";
import Newsletter from "@/components/Newsletter/Newsletter";

const navigation = {
  solutions: [
    { name: "Service", href: "#" },
    { name: "About us", href: "#" },
    { name: "New Campaign", href: "#" },
    { name: "Latest News", href: "#" },
  ],
  support: [
    { name: "Blood Donation", href: "#" },
    { name: "Health Check", href: "#" },
    { name: "Blood Bank", href: "#" },
    { name: "Donate Process", href: "#" },
    { name: "Donate Info", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

const FooterPage = () => {
  return (
    <div className="relative mt-72 lg:mt-52 ">
      <div className="bg-black text-white" aria-labelledby="footer-heading">
        <div className="p-5 lg:p-20 lg:pt-0 lg:pb-10">
          <Newsletter />
        </div>
        <h2 id="footer-heading" className="sr-only pt-10">
          Footer
        </h2>
        <div className="common">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 ">
                    Quick Links
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name} className="flex items-center gap-2">
                        <DoubleRightOutlined className="!text-primary" />
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:text-primary 
                      transition-all
                       duration-500 
                        ease-in-out
                        "
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 ">Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name} className="flex items-center gap-2">
                        <DoubleRightOutlined className="!text-primary" />
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:text-primary 
                      transition-all
                       duration-500 
                        ease-in-out
                        "
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 ">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name} className="flex items-center gap-2">
                        <DoubleRightOutlined className="!text-primary" />
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:text-primary 
                      transition-all
                       duration-500 
                        ease-in-out
                        "
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-0">
              <h3 className="text-sm font-semibold leading-6 ">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm leading-6 ">
                Everyday we work hard to make a change in the world. Subscribe
                to our newsletter to get the latest updates.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary  hover:bg-white hover:text-primary  transition duration-300 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex space-x-6 md:order-2">
              {SocialList.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary bg-primary p-2 rounded-lg transition duration-300 ease-in-out hover:bg-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-primary md:order-1 md:mt-0">
              &copy; 2023 Blut Blood Donation App. All rights reserved.
            </p>
          </div>
        </div>
        Newsletter
      </div>
    </div>
  );
};

export default FooterPage;
