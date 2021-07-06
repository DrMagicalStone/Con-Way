import { entity } from "./entity"
import { effect } from "../lifegame/speffect/effect"
import { event_bus } from "../event/eventbus"
import { golSpace } from "../entity/golSpace"

/**
 * The card that give players special effect.
 */
export class effectcard extends entity
{
    inside: effect;
    remaining_tick: number;

    constructor(effect_inside: effect, duration: number, kinematics: { xPos: number, yPos: number, xVelocity: number, yVelocity: number }, space: golSpace,
        destructorCondition: (ent: entity, x_pos: number, y_pos: number, space: any) => boolean)
    {
        super("effectcard", kinematics, space, destructorCondition);
        this.inside = effect_inside;
        this.remaining_tick = duration;
    }
}