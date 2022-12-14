import SpeedSvg from "../assets/speed.svg";
import AccelerationSvg from "../assets/acceleration.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import EnergySvg from "../assets/energy.svg";
import HybridSvg from "../assets/hybrid.svg";
import PeopleSvg from "../assets/people.svg";
import ExchangeSvg from "../assets/exchange.svg";
import carSvg from "../assets/car.svg";

export function getAccessoryItem(type: string) {
  switch (type) {
    case "speed":
      return SpeedSvg;
    case "acceleration":
      return AccelerationSvg;
    case "turning_diameter":
      return ForceSvg;
    case "gasoline_motor":
      return GasolineSvg;
    case "eletric_motor":
      return EnergySvg;
    case "hybrid_motor":
      return HybridSvg;
    case "seats":
      return PeopleSvg;
    case "exchange":
      return ExchangeSvg;

    default:
      return carSvg;
  }
}
