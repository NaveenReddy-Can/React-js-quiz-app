import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificateGenerator3 = ({ userName, videoTitle }) => {
  const certificateRef = useRef(null);

  const handleDownloadCertificate = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape");
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
      pdf.save(`${userName}-certificate.pdf`);
    });
  };

  const getCurrentDateTime = () => {
    const date = new Date();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div>
      <div ref={certificateRef} style={styles.certificate}>
        <div style={styles.logo}>
          <img src="https://dummyimage.com/150x150/000/fff" alt="Logo" />
        </div>
        <h1 style={styles.heading}>Certificate of Completion</h1>
        <p style={styles.body}>This certifies that</p>
        <h2 style={styles.name}>{userName}</h2>
        <p style={styles.body}>has successfully completed the video:</p>
        <h3 style={styles.title}>{videoTitle}</h3>
        <p style={styles.body}>
          Date and Time of Completion: {getCurrentDateTime()}
        </p>
        <div style={styles.badge}>Course Completed</div>
        {/*  <div style={styles.signatureContainer}>
          <div style={styles.signature}>
            <img src="https://dummyimage.com/100x100/000/fff" alt="Signature" />
          </div>
          <div style={styles.signatureDetails}>
            <p style={styles.ceoName}>John Smith</p>
            <p style={styles.ceoTitle}>CEO</p>
            <p style={styles.companyAddress}>123 Main Street, Anytown, USA</p>
          </div>
           </div>*/}
      </div>
      <button onClick={handleDownloadCertificate}>Download Certificate</button>
    </div>
  );
};

const styles = {
  certificate: {
    border: "3px solid #000",
    borderRadius: 10,
    padding: 20,
    margin: "20px auto",
    maxWidth: 800,
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  body: {
    fontSize: 20,
    color: "#666",
    marginBottom: 10,
  },
  congrats: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F44336",
    marginTop: 20,
    marginBottom: 20,
  },
};

export default CertificateGenerator3;
