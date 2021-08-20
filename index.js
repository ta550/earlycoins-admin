const express = require('express')
const app = express();
const port = process.env.PORT || 8080;
const {default: AdminBro} = require('admin-bro');
const { buildAuthenticatedRouter, buildRouter } = require('admin-bro-expressjs')
const {
    after: uploadAfterHook,
    before: uploadBeforeHook
} = require('./actions/upload-image.js')

require("./database/connection.js")
const { bannerModel, coinModel, addsModel, sliderModel, adminUserModel, userModel, newsletterModel, logsModel } =  require("./database/models.js")
const downloadResource = require('./utils.js');


app.use("/admin-panel/uploads/", express.static("admin-panel/uploads"));

const buildAdminRouter = (admin) => {
    const router = buildAuthenticatedRouter(admin, {
        cookieName: "early-coins",
        cookiePassword: "asasasdfdfguasfdperlongaaasfdsfdnasfddacsfdoasmdgplecafasdteasdfdnasdfaamsfeisverfydifficulthalsfdhwerawyr9834",
        authenticate: async (email, password) => {
            const adminUser = await adminUserModel.findOne({email: email, password: password});
            if (adminUser) {
                return adminUser.toJSON();
            }
            return null;
        }
    });
    // const router2 = buildRouter(admin);
    return router;
}

const locale = {
    translations: {
        labels: {
        // change Heading for Login
        loginWelcome: 'Early Coins',
    },
    messages: {
        loginWelcome: 'Wellcome to Early Coins',
    },
    },
  };



const admin = new AdminBro({
    dashboard: {
        handler: async () => {
        return { some: 'output' }
        },
        component: AdminBro.bundle('./components/dashboard.tsx')
    },
    branding: { companyName: 'Early Coins', softwareBrothers: false, logo: "/admin-panel/uploads/header-logo.png" },
    locale,
    rootPath: "/admin-panel",
    loginPath: "/admin-panel/login",
    logoutPath: "/admin-panel/exit",
    resources: [{
        resource: coinModel,
        properties: {
            created_at: {
                isVisible: { list: false, filter: true, show: true, edit: false },
            },
        },
        options: {
            listProperties: ["user_id","token_name", "votes", "promotted", "active"],
            editProperties: ["token_name","token_symbol","token_description","launch_date","token_actual_price","token_actual_market_cap","token_binance_smart_chain_contract_address","token_ethereum_contract_address","other_links","website","telegram","twitter","reddit","votes", "promotted", "active"],
            filterProperties: ["user_id", "promotted", "active"],
            actions: {
                new: { isVisible: false },
            }
        }
    },
    {
        resource: userModel,
        options: {
            actions: {
                new: {
                    isVisible: false
                },
                edit: { isVisible: false },
            }
        }
    },
    {
        resource: newsletterModel,
        options: {
            actions: {
                download: {
                    icon: "Download",
                    actionType: "resource",
                    isVisible: true,
                    handler: async () => {
                        console.log("hello world");
                        return false;
                    },
                    component: AdminBro.bundle('./components/downloadCSV.tsx')
                },
                new: { isVisible: false },
                edit: { isVisible: false }
            }
        }
    },
    {
        resource: bannerModel,
        options: {
            properties: {
                image: {
                    components: {
                        edit: AdminBro.bundle('./components/bannerImage.tsx'),
                        show: AdminBro.bundle('./components/bannerImageList.tsx'),
                        list: AdminBro.bundle('./components/bannerImageList.tsx')
                    }
                },
                _id: { isVisible: false },
                created_at: { isVisible: false }
            },
            actions: {
                search: {isVisible: false},
                show: {isVisible: false},
                new:{
                    isVisible: false,
                    // handler: (response, request,context) => {
                    //     console.log(request.files.image);
                    // }
                    // after: async (response, request, context) => {
                    //     return uploadAfterHook(response, request, context);
                    // }
                    // ,
                    before: async (request, context) => {
                        return uploadBeforeHook(request, context);
                    }
                },
                edit: {
                    before: async (request, context) => {
                        return uploadBeforeHook(request, context);
                    }
                },
                bulkDelete: { isVisible: false },
                delete: { isVisible: false }
            }
        }
    },
    {
        resource: addsModel,
        options: {
            properties: {
                image: {
                    components: {
                        edit: AdminBro.bundle('./components/bannerImage.tsx'),
                        show: AdminBro.bundle('./components/bannerImageList.tsx'),
                        list: AdminBro.bundle('./components/bannerImageList.tsx')
                    }
                },
                _id: { isVisible: false },
                created_at: { isVisible: false }
            },
            actions: {
                search: {isVisible: false},
                show: {isVisible: false},
                new:{
                    isVisible: false,
                    // after: async (response, request, context) => {
                    //     return uploadAfterHook(response, request, context);
                    // }
                    // ,
                    before: async (request, context) => {
                        return uploadBeforeHook(request, context);
                    }
                },
                edit: {
                    before: async (request, context) => {
                        return uploadBeforeHook(request, context);
                    }
                },
                bulkDelete: { isVisible: false },
                delete: { isVisible: false }
            }
        }
    },
    {
        resource: sliderModel,
        options: {
            properties: {
                image: {
                    components: {
                        edit: AdminBro.bundle('./components/bannerImage.tsx'),
                        show: AdminBro.bundle('./components/bannerImageList.tsx'),
                        list: AdminBro.bundle('./components/bannerImageList.tsx')
                    }
                },
                _id: { isVisible: false },
                created_at: { isVisible: false }
            },
            actions: {
                search: {isVisible: false},
                show: {isVisible: false},
                new:{
                    before: async (request, context) => {
                        return uploadBeforeHook(request, context);
                    }
                },
                edit: {
                    before: async (request, context) => {
                        return uploadBeforeHook(request, context);
                    }
                }
            }
        }
    },
    {
        resource: adminUserModel,
        options: {
            properties: {
                _id: { isVisible: false },
                password: {isVisible: true}
            }
        }
    },
    {
        resource: logsModel,
        // meta: {
        //     direction: "desc",
        //     sortBy: "dateAndTime",
        // },
        options: {
            sort: {sortBy: "dateAndTime", direction: "desc"},
            actions: {
                new: {isVisible: false},
                edit: {isVisible: false},
                // bulkDelete: { isVisible: false },
                // delete: { isVisible: false },
                show: {isVisible: false}
            },
            filterProperties: ["dateAndTime", "user"],
            properties: {
                _id: {isVisible: false},
                coin: {isVisible: false},
                message: {
                    components: {
                        list: AdminBro.bundle('./components/logsMessage.tsx'),
                    }
                },
                log_type: {isVisible: false}
            }
        }
    }
]
}) 

app.get("/", (req,res) => {
    res.redirect("/admin-panel/")
})

app.get('/download/newsletter', (req,res) => {
    newsletterModel.find({}, (err,result) => {
        console.log(result);
        const fields = [
                {
                    label: 'Email',
                    value: 'email'
                }
            ];
        return downloadResource(res, 'newsletter.csv', fields, result);
    })
})

// const admin = new AdminBro({
//     options,
//     resources: [coinModel, userModel, newsletterModel],
// });

const router = buildAdminRouter(admin);


app.get("/admin-panel/api/dashboard", (req,res) => {
    coinModel.countDocuments({active: true}, (err,activeCoins) => {
        coinModel.countDocuments({active: false}, (err,inactiveCoins) => {
            userModel.countDocuments({}, (err,usersLength) => {
                newsletterModel.countDocuments({}, (err,newsletterLength) => {
                    adminUserModel.countDocuments({}, (err,adminUsers) => {
                        res.json({
                            "activeCoins": activeCoins,
                            "inactiveCoins": inactiveCoins,
                            "users": usersLength,
                            "newsletters": newsletterLength,
                            "adminUsers": adminUsers
                        })
                    })
                })
            })
        });
    });
});

app.use(admin.options.rootPath, router);

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log("server started at port no :"+ port);
})