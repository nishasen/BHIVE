import { BsCalendar4Event } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { TbCoffee } from "react-icons/tb";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { GrLounge } from "react-icons/gr";
import { PiClockClockwiseFill } from "react-icons/pi";
import { MdOutlineSportsTennis } from "react-icons/md";
import { COLORS } from "../assets/styles/colors";

export const facilities = [{
    id: 1,
    icon: <BsCalendar4Event color={COLORS.$primary_yellow} size={25} />,
    facility: 'Community Events',
  }, {
    id: 2,
    icon: <CgGym color={COLORS.$primary_yellow} size={25} />,
    facility: 'Gym Facilities',
  }, {
    id: 3,
    icon: <FaWifi color={COLORS.$primary_yellow} size={25} />,
    facility: 'Highspeed Wifi',
  }, {
    id: 4,
    icon: <TbCoffee color={COLORS.$primary_yellow} size={25} />,
    facility: 'Cafe & Tea Bar',
  }, {
    id: 5,
    icon: <RiMoneyRupeeCircleLine color={COLORS.$primary_yellow} size={25} />,
    facility: 'Affordable',
  } , {
    id: 6,
    icon: <GrLounge color={COLORS.$primary_yellow} size={25} />,
    facility: 'Comfort Lounges',
  }, {
    id: 7,
    icon: <PiClockClockwiseFill color={COLORS.$primary_yellow} size={25} />,
    facility: 'Quick Booking',
  }, {
    id: 8,
    icon: <MdOutlineSportsTennis color={COLORS.$primary_yellow} size={25} />,
    facility: 'Sports Area',
  }];