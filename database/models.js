const mongoose = require('mongoose');
const adminBroMongoose = require('admin-bro-mongoose');
const Adminbro = require('admin-bro');
Adminbro.registerAdapter(adminBroMongoose);
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    name: String,
    email: String,
    password: String,
    created_at: {
        type: Date,
        default: new Date()
    }
});

const userModel = mongoose.model('user', userSchema);
const ip = require('ip')

const coinSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    yesterdayTopPerformer: {
        type: Boolean,
        default: false
    },
    votes: {
        type: Number,
        default: 0
    },
    todayVotes: {
        type: Number,
        default: 0,
    },
    lastVoteDate: {
        type: Date,
        default: new Date(),
    },
    ip_address: {
        type: String,
        default: ip.address()
    },
    active: {
        type: Boolean,
        default: false
    },
    promotted: {
        type: Boolean,
        default: false
    },
    token_name: {
        type: String,
        required: true,
    },
    token_symbol: {
        type: String,
        required: true,
    },
    token_description: {
        type: String,
        required: true,
    },
    launch_date: {
        type: Date,
        required: true,
    },
    launch_day: {
        type: String,
        required: true
    },
    launch_month: {
        type: String,
        required: true
    },
    launch_year: {
        type: String,
        required: true
    },
    token_logo: {
        type: String,
        required: true,
    },
    token_actual_price: {
        type: String,
        required: true,
    },
    token_actual_market_cap: {
        type: String,
        required: true,
    },
    token_binance_smart_chain_contract_address: {
        type: String
    },
    token_ethereum_contract_address: {
        type: String,
    },
    other_links: {
        type: String
    },
    website: {
        type: String
    },
    telegram: {
        type: String
    },
    twitter: {
        type: String
    },
    reddit: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

const coinModel = mongoose.model('coin', coinSchema);


const newsletterSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const newsletterModel = mongoose.model('newsletter', newsletterSchema);


const commentSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    coin_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coin',
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

const commentModel = mongoose.model("comment", commentSchema)

const bannerSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    }
})

const bannerModel = mongoose.model("banner", bannerSchema);

const sliderSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    url: {
        type: String, 
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    }
})


const sliderModel = mongoose.model("slider", sliderSchema);


const adsSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    url: {
        type: String, 
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    }
})


const addsModel = mongoose.model("adds", adsSchema);


const adminUserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})

const adminUserModel = mongoose.model("adminUser", adminUserSchema);


const logsSchema = new Schema({
    dateAndTime: {
        type: Date,
        default: new Date(),
    },
    message: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    coin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'coin'
    },
    log_type: {
        type: String,
        required: true
    }
})

const logsModel = mongoose.model("logs", logsSchema);

module.exports = {
    userModel: userModel,
    coinModel: coinModel,
    newsletterModel: newsletterModel,
    commentModel: commentModel,
    bannerModel: bannerModel,
    sliderModel: sliderModel,
    addsModel: addsModel,
    adminUserModel: adminUserModel,
    logsModel: logsModel,
}