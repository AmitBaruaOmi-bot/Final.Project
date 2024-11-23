import logo from './knock-knock-high-resolution-logo-transparent.png'
import search from './search_icon.png'
import basket from './basket_icon.png'
import header_background from './header_image.png'
import likes from './likes.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import bag_icon from './bag_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'
import play_store from './play_store.png'
import profile_icon from './profile_icon.png'
import logout_icon from './logout_icon.png'
import selector_icon from './selector_icon.png'
import cross_icon from './cross_icon.png'

import menu_two from './cattwo.png'
import menu_three from './catthree.png'
import menu_five from './catfive.png'

import CS from './CS.jpg'
import CSW from './CSW.jpg'
import PM from './PM.jpg'
import PP from './PP.jpg'
import PV from './PV.jpg'
import FC from './FC.jpg'
import FF from './FF.jpg'
import CB from './CB.jpg'



export const assets = {
    logo,
    search,
    basket,
    header_background,
    likes,
    add_icon_white,
    add_icon_green,
    remove_icon_red,
    bag_icon,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    play_store,
    profile_icon,
    logout_icon,
    selector_icon,
    cross_icon
}

export const menu_items = [

    {
        menu_name: "Salad",
        menu_image: menu_two
    },

    {
        menu_name: "Meal",
        menu_image: menu_three
    },

    {
        menu_name: "Sandwich",
        menu_image: menu_five
    }


]

export const food_list = [
    {
        _id: 1,
        name: "Ceaser Salad",
        category: "Salad",
        image: CS,
        price: 3.99,
        descriptions: "Lettuce and greens mixed with bread crumbs and salad ranch"
    },
    {
        _id: 2,
        name: "Chicken Sandwich",
        category: "Meal",
        image: CSW,
        price: 4.99,
        price: 7.99,
        descriptions: "Bread with chicken crumbles, tomato, lettuce and mayonese"
    },
    {
        _id: 3,
        name: "Pizza Margarita",
        category: "Pizza",
        image: PM,
        price: 5.99,
        descriptions: "Freshly baked pizza with self raising flour dough, mozzarella cheese, gorgonzola cheese, tomato sauce and fresh herbs at the end"
    },
    {
        _id: 4,
        name: "Pizza Peperoni",
        category: "Pizza",
        image: PP,
        price: 5.99,
        descriptions: "Freshly baked pizza with self raising flour dough, mozzarella cheese, tomato sauce, peperoni and fresh herbs at the end"
    },
    {
        _id: 5,
        name: "Pizza Vegiterian",
        category: "Pizza",
        image: PV,
        price: 5.99,
        descriptions: "Freshly baked pizza with self raising flour dough, mozzarella cheese, tomato sauce, mashrooms, basils and fresh herbs at the end"
    },
    {
        _id: 6,
        name: "Fried Chicken",
        category: "Chicken/Fries",
        image: FC,
        price: 5.99,
        descriptions: "Freshly marinated fried chicken with crispy beradcrumbs and salty butter"
    },
    {
        _id: 7,
        name: "French Fries",
        category: "Fries",
        image: FF,
        price: 2.99,
        price: 3.99,
        descriptions: "Freshly marinated fried potatoes with fresh herbs at the end"
    },
    {
        _id: 8,
        name: "Chicken Burger",
        category: "Burger/Meal",
        image: CB,
        price: 5.99, 
        descriptions: "Fresh bread bun with freshly fried chicken, red onions, cheese slice with mustard and fresh herbs at the end"
    }
]

