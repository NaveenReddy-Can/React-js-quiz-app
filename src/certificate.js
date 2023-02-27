import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificateGenerator = ({ userName, videoTitle }) => {
    const certificateRef = useRef(null);

    const handleDownloadCertificate = () => {
        html2canvas(certificateRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save(`${userName}-certificate.pdf`);
        });
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
                <p style={styles.body}>Congratulations!</p>
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
        maxWidth: 600,
        textAlign: "center"
    },
    logo: {
        marginBottom: 20
    },
    heading: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    body: {
        fontSize: 16,
        marginBottom: 10
    }
};

export default CertificateGenerator;
