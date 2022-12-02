import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './AboutIntro.scss';


class AboutIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
        }
    }

    render() {
        return (
            <div className="AboutIntro-container">
                <div className="AboutIntro-body">
                    <div className="AboutIntro-content">
                        <p className="AboutIntro-content-p">

                            Tại sao Trăng Khuyết?

                            Cuộc đời như một vòng trăng, rồi ai cũng có khi đầy, khi khuyết. Cũng như con trăng kia, khi mới sinh ra trăng sẽ khuyết bên trái, rồi khi già đi trăng lại khuyết dần bên phải. Chính những lúc khuyết ấy, là lúc ta cần lắm cái sự chở che và chăm sóc của những người thân bên mình. Sẽ thật không may cho ai đó, nếu lúc khuyết kia ta chỉ đơn bóng có một mình.

                            + Có những vầng trăng nhỏ thì thầm hỏi chúng tôi rằng: đâu sẽ là nhà cho con khôn lớn? đâu là mẹ để đút cho con ăn? đâu là ba để dìu dắt con vào đời?

                            + Lại có những vầng trăng già ngậm ngùi khóc than với chúng tôi rằng: đâu sẽ là nhà để ngả cái lưng già? đâu sẽ là cơm để thành cái bữa qua ngày? đâu sẽ là hậu sự lúc nhắm mắt, buông tay?

                            Chúng tôi chỉ biết nắm lấy bàn tay ấy và cùng họ viết về một ước mơ tên là “Trăng Khuyết”. Trong ước mơ ấy, có hình bóng của một vầng trăng xanh đầy hi vọng, một bàn tay lớn nâng đỡ và chở che, một trái tim nhân ái cùng gắn kết và yêu thương!

                            Tầm nhìn

                            Trăng Khuyết phấn đấu trở thành một tổ chức từ thiện Tập thể – Minh bạch – Đồng cảm – Chân thành – Truyền cảm hứng trong mảng từ thiện về nhân đạo và sự sống tại Việt Nam.

                            Sứ mệnh

                            Trăng Khuyết cố gắng và nỗi lực hết mình với cam kết hai không trong một xã hội hiện đại:

                            1/ Không có người già bị thiếu đói, thiếu chỗ ở, phải sinh sống và xin ăn trên đường phố;

                            2/ Không có trẻ em bị thiếu đói, bị bỏ rơi hoặc phải tự mưu sinh khi chưa đến tuổi trưởng thành;

                            Hành thiện

                            Chúng tôi xác định rõ: Trăng Khuyết là một tổ chức đi sau trong mảng nhân đạo và sự sống, chúng tôi không tạo ra giá trị mới khi chưa hoàn thiện được các giá trị cũ:

                            + Với những người đã làm tốt , Trăng Khuyết xin phép được: Chung tay – Góp sức – Kết nối và Kế thừa

                            + Với người làm chưa tốt, Trăng Khuyết xin phép được: Cùng học – Cùng sửa – Cùng soi xét và Điều chỉnh

                            Tuy nhiên, chúng tôi cũng khẳng định rõ Trăng Khuyết là một tổ chức phi chính phủ, phi tôn giáo và phi lợi nhuận. Hoạt động theo mô hình doanh nghiệp xã hội. Thực hiện đúng và đủ và các quyền và trách nhiệm hợp pháp theo nghị định 96/2015/NĐ-CP.

                            Cơ cấu tổ chức

                            Trăng Khuyết bao gồm 6 đội TNV hoạt động độc lập, có sự hỗ trợ, giám sát và kiểm soát chéo lẫn nhau:

                            (1) Đội TNV đường phố,

                            (2) Đội Cứu trợ khẩn cấp

                            (3) Đội Chăm sóc mái ấm

                            (4) Đội Vận hành và hoạt động (VP)

                            (5) Đội Quản trị và phát triển tổ chức (VP)

                            (6) Đội Minh bạch tài chính & hiệu quả vận hành

                            Đồng thời, các kế hoạch và định hướng của của Trăng Khuyết sẽ do Hội đồng Mạnh thường quân xem xét, phê quyệt và kiểm soát.


                        </p>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutIntro);
