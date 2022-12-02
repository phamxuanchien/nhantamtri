export const adminMenu = [
    { //Quản lý người dùng
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.user-account', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-manager', link: '/system/manage-manager'
            },

            { //Quản lý kế hoạch khám bệnh của bác sĩ
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
        ]
    },
    { //Quản lý công tác từ thiện
        name: 'menu.admin.charity',
        menus: [
            {
                name: 'menu.admin.manage-projectneedhelp', link: '/system/manage-projectneedhelp'
            },
            {
                name: 'menu.admin.manage-humanneedhelp', link: '/system/manage-humanneedhelp'
            },
        ]
    },
    { //Quản lý tin tức sự kiện
        name: 'menu.admin.newsevents',
        menus: [
            {
                name: 'menu.admin.manage-newsevents', link: '/system/manage-newsevents'
            },
        ]
    },
    { //Quản lý mạnh thường quân
        name: 'menu.admin.benefactor',
        menus: [
            {
                name: 'menu.admin.manage-benefactor', link: '/system/manage-benefactor'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            { //Quản lý tài khoản người dùng
                name: 'menu.member.edituser',
                link: '/system/editinfouser'
            },
        ]
    },
    //quản lý bài đăng
    {
        name: 'menu.admin.manage-post',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //báo cáo hoạt động
    {
        name: 'menu.admin.manage-activity',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý hệ thống
    {
        name: 'menu.admin.internal-operations.internal-operation',
        menus: [
            { //Quản lý submenu
                name: 'menu.admin.internal-operations.manage-groupmenu', link: '/system/manage-submenu'
            },
            { //Quản lý chi nhánh
                name: 'menu.admin.internal-operations.manage-branch', link: '/system/manage-branch'
            },
            { //Quản lý phòng ban
                name: 'menu.admin.internal-operations.manage-department', link: '/system/manage-department'
            },
            { //Quản lý nhóm làm việc
                name: 'menu.admin.internal-operations.manage-group', link: '/system/manage-group'
            },
            { //Quản lý allcode
                name: 'menu.admin.internal-operations.manage-allcode', link: '/system/manage-allcode'
            },
        ]
    },
    //Quản lý công việc
    {
        name: 'menu.admin.work.manage-work',
        menus: [
            { //Quản lý công việc
                name: 'menu.admin.work.manage-work', link: '/system/manage-work'
            },
            { //tại mới công việc
                name: 'menu.admin.work.create-work', link: '/system/create-work'
            },
            { //phân công công việc
                name: 'menu.admin.work.assignment-work', link: '/system/assignment-work'
            },
            { //triển khai công việc
                name: 'menu.admin.work.deploy-work', link: '/system/deploy-work'
            },
            { //kế hoạch làm việc
                name: 'menu.admin.work.plan-work', link: '/system/plan-work'
            },
            { //thực hiện công việc
                name: 'menu.admin.work.perform-work', link: '/system/perform-work'
            },
        ]
    },
    //Quản lý công ty
    {
        name: 'menu.admin.company.manage-company',
        menus: [
            { //phòng tài chính
                name: 'menu.admin.work.manage-work', link: '/system/manage-work'
            },
            { //phòng kế toán
                name: 'menu.admin.work.create-work', link: '/system/create-work'
            },
            { //phòng nhân sự
                name: 'menu.admin.work.assignment-work', link: '/system/assignment-work'
            },
            { //phòng kinh doanh
                name: 'menu.admin.work.deploy-work', link: '/system/deploy-work'
            },
            { //phòng sản xuất
                name: 'menu.admin.work.plan-work', link: '/system/plan-work'
            },
            { //phòng cung ứng
                name: 'menu.admin.work.perform-work', link: '/system/perform-work'
            },
        ]
    },
];

export const managerMenu = [
    //quản lý chức năng
    {
        name: 'menu.admin.manage-user',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ

                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'

            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ

                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'

            },
        ]
    },
    //quản lý bài đăng
    {
        name: 'menu.manager.manage-post',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ

                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'

            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ

                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'

            },
        ]
    },
    //báo cáo hoạt động
    {
        name: 'menu.manager.manage-activity',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ

                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'

            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ

                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'

            },
        ]
    },
    {
        name: 'menu.member.manageuser',
        menus: [
            { //Quản lý tài khoản người dùng
                name: 'menu.member.edituser',
                link: '/system/editinfouser'
            },
        ]
    }
];

export const patientMenu = [
    //báo cáo hoạt động
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ

                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'

            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ

                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'

            },
        ]
    },
    {
        name: 'menu.member.manageuser',
        menus: [
            { //Quản lý tài khoản người dùng
                name: 'menu.member.edituser',
                link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho nhân viên
export const staffMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho nhân viên
export const leaderMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //Quản lý kế hoạch khám bệnh của bác sĩ
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //Quản lý bệnh nhân khám bệnh của bác sĩ
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];


//menu dành cho trưởng phòng, chi nhánh, bộ phận
export const departmentMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //tạo và quản lý công việc
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];


//menu dành cho giám đốc chi nhánh, bộ phận
export const branchMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //tạo và quản lý công việc
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];


//menu dành cho giám đốc điều hành
export const ceoMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng kế toán
export const accountantMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng tài chính
export const financeMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng marketing
export const marketingMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng bán hàng
export const sellMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng sản xuất
export const producMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng kỹ thuật bảo trì
export const engineerMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng nguyên liệu, thu mua
export const purchasingMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng quản lý kho, vận
export const logisticsMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng it
export const itMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho phòng nhân sự
export const humanResoucesMenu = [
    //quản lý công việc
    {
        name: 'menu.member.manage-activity',
        menus: [
            { //phân bổ kế hoạch và quản lý thành viên
                name: 'menu.manager.manage-schedule', link: '/manager/manage-schedule'
            },
            { //triển khai công việc được giao
                name: 'menu.manager.manage-patient', link: '/manager/manage-patient'
            },
        ]
    },
    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];


//menu dành cho giám đốc tài chính
export const financeDirectorMenu = [
    //phòng tài chính
    //phòng kế toán

    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho giám đốc kinh doanh
export const businessDirectorMenu = [
    //phòng bán hàng
    //phòng marketing

    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho giám đốc sản xuất
export const productionDirectorMenu = [
    //phòng sản xuất
    //phòng kỹ thuật, bảo trì

    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho giám đốc cung ứng
export const supplyDirectorMenu = [
    //phòng thu mua nguyên liệu 
    //phòng ho, vận

    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

//menu dành cho giám đốc nhân sự
export const humanDirectorMenu = [
    //phòng nhân sự 
    //phòng tuyển dụng, đào tạo
    //phòng it

    //Quản lý tài khoản
    {
        name: 'menu.member.manageuser',
        menus: [
            {
                name: 'menu.member.edituser', link: '/system/editinfouser'
            },
        ]
    }
];

