import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import lap from "../../img/lap.jpg";
import cc2 from "../../img/cc2.jpg";
import computer3 from "../../img/computer3.jpg";
import computer123 from "../../img/computer123.png";
import Hardware from "../../img/HARDWARE-NETWORKING.webp";
import hardware from "../../img/hardware.jpeg";
import enterprise from "../../img/enterprise software.webp";
import apple from "../../img/applelaptop.jpg"; // Replace with actual path to image
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Products = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="my-container">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Products</h1>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="background-container">
          <img src={lap} alt="Laptop" className="product-image" />
          <div
            className="text-content bg-white p-5 "
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h3>Laptop & Computer Brand</h3>
            <p>
              iTZ-ONE is one of the leading companies in Computer Sales and
              Services that is gaining momentum each day. Backed by a strong
              team of highly-skilled professionals, we provide world-class
              services. We sell to our customers the latest and most reliable
              computers, which meet industry standards and come with the finest
              features and functions. Moreover, we have our own service center
              to bring out more technical solutions for you.
            </p>
            <Button onClick={handleShow} className="discover-more-btn">
              view more
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Laptop & Computer Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Put any content you want in the modal here */}
          The details about the laptop and computer brand...
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <div className="container mt-5">
  <div className="background-container" >
    <div className="text-content  bg-white p-5" id="unique-text-content">
      <div className="red-dash" id="unique-red-dash"></div>
      <h3>Laptop & Computer Brand</h3>
      <p>iTZ-ONE is one of the leading companies in Computer Sales and Services that is gaining momentum each day. Backed by a strong team of highly-skilled professionals, we provide world-class services...</p>
    </div>
    <img src={lap} alt="Laptop" className="product-image" id="unique-product-image"/>
  </div>
</div> */}

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h3 className="text-center">CCTV Servies</h3>
                <p>
                  iTZ-ONE offers an Annual Maintenance Contract that will help
                  you install a CCTV camera on your business premises, at the
                  home, factory, warehouse, offices, etc so that you can keep an
                  eye on all activities going on and also on those who enter
                  your premises. Moreover, we help you to keep your CCTV camera
                  updated and in perfect working condition so that you live a
                  peaceful life.We offer one of the best services in the city at
                  a very economical rate.
                </p>
              </div>
              <div className="col-md-6 ">
                <img src={cc2} alt="Laptop" className="image" />
                <img src={cc2} alt="Laptop" className="image ipad-class mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="background-container">
          <img src={hardware} alt="Laptop" className="product-image" />
          <div
            className="text-content text-image bg-white p-5"
            style={{ textAlign: "justify" }}
          >
            <div className="red-dash"></div>
            <h3 className="text-center">Hardware & Networking Solutions</h3>
            <p>
              iTZ-ONE is one of the leading companies in Computer Sales and
              Services that is gaining momentum each day. Backed by a strong
              team of highly-skilled professionals, we provide world-class
              services. We sell to our customers the latest and most reliable
              computers, which meet industry standards and come with the finest
              features and functions. Moreover, we have our own service center
              to bring out more technical solutions for you.
            </p>
            <Button onClick={handleShow} className="discover-more-btn">
              view more
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="container mt-5">
      <div className="card">
        <div className="card-body sample">
          <div className="content-overlay">
            <img src={cc2} alt="Laptop" className="image-overlay" />
            <div className="text-content bag bg-white">
              <h3 className="text-center">Hardware & Networking Solutions</h3>
              <p>iTZ-ONE is one of the leading companies in Computer Sales and Services that is gaining momentum each day. Backed by a strong team of highly-skilled professionals, we provide world-class services. We sell to our customers the latest and most reliable computers, which meet industry standards and come with the finest features and functions. Moreover, we have our own service center to bring out more technical solutions for you.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h3 className="text-center">Enterprise Wi-Fi Solutions</h3>
                <p>
                  Today, businesses need fast and reliable internet connectivity
                  to be productive. This is true, especially in sectors where
                  companies utilize machine learning and artificial intelligence
                  in their systems. This need has led to the rise of enterprise
                  Wi-Fi solutions. These are advanced networks that use
                  strategic design, more access points, and better equipment to
                  create reliable web connectivity for business users.
                  Enterprise Wi-Fi utilizes slightly different management
                  methods and protocols compared to consumer networks. The
                  equipment can support bigger loads without being affected by
                  dropped or dead signals. An administrator controls access so
                  that only authorized people are able to connect. In short,
                  enterprise Wi-Fi is an advanced version of home Wi-Fi built to
                  manage the greater demands of public institutions and
                  businesses.
                </p>
              </div>

              <div className="col-md-6 image-container">
                <img src={computer3} alt="Laptop" className="image1" />
                <img
                  src={computer3}
                  alt="Laptop"
                  className="image1 ipad-class mt-2"
                />
                <img
                  src={computer3}
                  alt="Laptop"
                  className="image1 ipad-class mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div
                className="col-md-12 text-center"
                style={{ textAlign: "justify" }}
              >
                <h3>Software Installation Support</h3>
              </div>
              <div className="col-md-12 " style={{ textAlign: "justify" }}>
                <p>
                  iTZ-ONE provides you with software installation services at
                  convenient rates. You must be thinking that why you need a
                  company when you can install software on your own? Well, we
                  have seen a drastic change in the computing industry over the
                  past few years. Know the size of computers has become small
                  and they work at an exceptional speed and this is because of
                  the modern software technology. Various complex software has
                  been introduced in the market by different organizations and
                  installing highly complex software is not easy as it required
                  a lot of time and energy. We are living in a world where
                  computers and laptops have completely taken over us. Our life
                  wouldn’t work without this electronic equipment. They have
                  become the primary part of our lives, especially after the
                  covid crisis. People who are familiar with the technicalities
                  of computers can easily install any sort of software. However,
                  people who are not familiar with the complexities of
                  modern-day computers, wouldn’t install large and complicated
                  software, on their own. To help people in dealing with such
                  complexed software our technicians are providing remarkable
                  services. We take your stress away by providing you with the
                  latest software installation services for your laptops,
                  computers, and desktops. We assure you that we’ll install the
                  correct software for your computers. Another thing that we
                  guarantee you is we provide you with legal and virus-free
                  software. Whether you need OS installation and repairing
                  services or software installation services, our experts will
                  just help.{" "}
                </p>{" "}
              </div>
            </div>
            <div className="row h-100">
              <div className="col-md-6" style={{ textAlign: "justify" }}>
                <h6>Our software installation services include:</h6>
                <ul>
                  <li>Office Software.</li>
                  <li>Business and analytical Software.</li>
                  <li>Software Settings & Updates.</li>
                  <li>Licensing Software, antivirus software. </li>
                  <li>Photo editing software. </li>
                </ul>

                <h6>
                  And for laptops and desktops, we provide the following OS
                  installation services.{" "}
                </h6>
                <ul>
                  <li>Windows 7 & 10 Installations.</li>
                  <li>Windows O/S Repairs.</li>
                  <li>Setting Window for New Computer.</li>
                  <li>Windows Settings and updates. </li>
                  <li>
                    Linux Operating System Support and up-gradation of windows.{" "}
                  </li>
                </ul>
              </div>
              <div className="col-md-6 h-">
                <img src={computer123} alt="Laptop" className="image1" />
                <img
                  src={computer123}
                  alt="Laptop"
                  className="image1 ipad-class "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container  mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 p-5 ">
              <img src={enterprise} alt="Laptop" className="image" />
              <img src={enterprise} alt="Laptop" className="image ipad-class mt-5" />
              </div>
              <div className="col-md-6 mt-5" style={{textAlign: "justify"}}>
                <h3 className="text-center">Enterprise Solutions</h3>
              
                <p>At iTZ-ONE, we specialize in providing a wide range of enterprise software solutions designed to meet the diverse needs of businesses across various sectors. Our offerings include advanced systems for CRM, ERP, project management, business intelligence, and much more. Whether you're looking to enhance operational efficiency, streamline business processes, or improve customer engagement, iTZ-ONE has the right tools to help you achieve your goals. Our solutions are tailored to maximize productivity and ensure seamless integration with your existing infrastructure, enabling you to leverage technology for business success. Trust iTZ-ONE to empower your enterprise with the software solutions it needs to thrive in the competitive market landscape.</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

   

      <div className="container container-product mt-5 ">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 " style={{ textAlign: "justify" }}>
                <h3 className="text-center">Server Rack and Cable Managment</h3>
                <p>
                  Data centers today consist of rows of server racks and network
                  cabinets to support an abundance of data cables, power cords,
                  and network devices. Delivering proficient cable management
                  within a confined and tightly-spaced server rack is quite
                  difficult. However, cable management is no longer a nightmare
                  if you follow the right guide.
                </p>
              </div>
              <div className="col-md-6 image-container">
                <img src={Hardware} alt="Laptop" className="image" />
                <img
                  src={Hardware}
                  alt="Laptop"
                  className="image ipad-class mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
