import { SandboxInstance } from "./sandbox";
import { pull, takeRight } from "lodash";
import { fixLocation, expToLevel, expTransfer } from "./util";

class Cordinate {
  //格外留意此处可能带来的问题，找机会理清 type class interface 的区别
  full: number[] = [NaN, NaN];
  set x(inputx: number) {
    this.full[0] = inputx;
  }
  set y(inputy: number) {
    this.full[1] = inputy;
  }
  get x(): number {
    return this.full[0];
  }
  get y(): number {
    return this.full[1];
  }
}
export class Player {
  /* 玩家原型对象 */

  id;
  status;
  highestExp;
  kill;
  death;
  location: Cordinate;
  battleLog: (number | boolean)[][];

  constructor(id: number) {
    this.id = id;
    this.status = 0;
    this.highestExp = 0;
    this.kill = 0;
    this.death = 0;
    this.location = new Cordinate();
    this.battleLog = [];
  }

  set log(content: (number | boolean)[]) {
    const battleLogSize = 20;

    if (this.battleLog.length >= battleLogSize) {
      this.battleLog = takeRight(this.battleLog, battleLogSize - 1);
    }
    this.battleLog.push(content);
  }
  //处理战斗日志，日后考虑将battleLogSize变为可配置

  get kd(): number[] {
    return [this.kill, this.death];
  }
  // 实用属性，返回玩家的击杀/死亡比，以数组形式

  get timesBattled(): number {
    return this.kill + this.death;
  }
  // 实用属性，返回玩家的总战斗场次

  get level(): number[] {
    return expToLevel(this.status);
  }
  // 实用属性，返回玩家的当前等级，和多余的经验数量，以数组呈现

  get highestLevel(): number[] {
    return expToLevel(this.highestExp);
  }

  win(exp: number): void {
    this.status = this.status + expTransfer(exp);
    this.kill++;
    if (this.highestExp < this.status) {
      this.highestExp = this.status;
    }
  }
  // 玩家战斗胜利，传入参数为对方的经验值

  dead(): void {
    this.status = -1; // 状态记为死亡
    this.death++; // 记录死亡次数
    pull(SandboxInstance.map[this.location.x], this.id);
    this.location.x = NaN;
  }
  // 玩家死亡，经验值变为-1，从地图上消失。

  move(path: number) {
    pull(SandboxInstance.map[this.location.x], this.id);
    this.location.x = fixLocation(this.location.x + path);
    SandboxInstance.map[this.location.x].push(this.id);
    return this.location.x;
  }
}
