require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,  //true for 465
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });
    let info = await transporter.sendMail({
        from: '"Hỏi Dân It" <phamxuanchien2481983@gmail.com>',
        to: dataSend.reciverEmail,
        subject: "Thông tin đặt lịch khám bệnh",
        html: getBodyHTMLEmail(dataSend),

    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được Email này vì đã đặt lịch khám bệnh online trên Hỏi Dân It channel</p>
        <p>Thông tin đặt lịch khám bệnh</p>
        <div><p>Thời gian: ${dataSend.time}</p></div>
        <div><p>Bác sĩ: ${dataSend.managerName}</p></div>
        <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới
            để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.
        </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank" >Click Here</a>
        </div>
        <div>Xin chân thành cám ơn</div>`
    }
    if (dataSend.language === 'en') {
        result =
            `
        <h3>Dear ${dataSend.patientName}!</h3>
        <p>You are got this Email because has been set to the history of online on Hỏi Dân It channel</p>
        <p>Information to book a medical appointment</p>
        <div><p>Time: ${dataSend.time}</p></div>
        <div><p>Manager: ${dataSend.managerName}</p></div>
        <p>If the above information is true, please click on the link below to confirm and complete the procedure to book an appointment.
        </p>
        <div>
            <a href=${dataSend.redirectLink} target="_blank" >Click Here</a>
        </div>
        <div>Thank you very much</div>`
    }
    return result;
}

let getBodyHTMLEmailRemedy = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
    <h3>Xin chào ${dataSend.patientName}!</h3>
    <p>Bạn nhận được Email này vì đã đặt lịch khám bệnh online trên Hỏi Dân It channel</p>
    <p>Thông tin đơn thuốc/hóa đơn thanh toán được gởi trong file đính kèm </p>
    
    <div>Xin chân thành cám ơn</div>`
    }
    if (dataSend.language === 'en') {
        result =
            `
    <h3>Dear ${dataSend.patientName}!</h3>
    <p>You are got this Email because has been set to the history of online on Hỏi Dân It channel</p>
    <p>Information on prescription/invoice is sent in the attached file </p>
    
    <div>Thank you very much</div>`
    }
    return result;
}

let sendAttachment = async (dataSend) => {
    return new Promise(async (resolve, reject) => {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,  //true for 465
                auth: {
                    user: process.env.EMAIL_APP,
                    pass: process.env.EMAIL_APP_PASSWORD,
                },

            });
            //`remedy-${dataSend.patientId}-${new Date().getTime()}.png`
            let info = await transporter.sendMail({
                from: '"Hỏi Dân It" <phamxuanchien2481983@gmail.com>',
                to: dataSend.email,
                subject: "Kết quả đặt lịch khám bệnh",
                html: getBodyHTMLEmailRemedy(dataSend),
                attachments: [
                    {
                        filename: 'text1.png',
                        content: dataSend.imgBase64.split("base64,")[1],
                        encoding: 'base64'

                    },
                ],
            });
            resolve(true)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendAttachment: sendAttachment
}