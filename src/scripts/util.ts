import { sampleSize, random, floor } from "lodash";

import { Player } from "./player";
import { SandboxInstance } from "./sandbox";

/* 一些公用函数 */

export function expToLevel(exp: number) {
  let level = 0;
  let index = 1;
  while (index <= exp) {
    level++;
    exp -= index;
    index++;
  }
  return [level, exp];
}
// 输入经验值，计算出当前等级和溢出的经验数量组成的数组

export function expTransfer(exp: number) {
  if (exp < 3) {
    return 1;
  } else {
    return floor(exp / 3);
  }
}
// 死亡时经验值结算，获得对方经验的1/3，最低获得1点

export function battle(params: number[]) {
  switch (params.length) {
    case 0:
      // console.log("No one in the arena!!!");
      break;

    case 1:
      // console.log(params[0].id + " battled himself");
      break;

    default:
      while (params.length > 1) {
        const a = sampleSize(params, 2);
        params.splice(fight(a[0], a[1]), 1);
      }
      // 这里放打架时候的代码
      break;
  }
}

export function fight(a: number, b: number) {
  // 仅传入战斗双方的ID
  const ra = SandboxInstance.playerList[a];
  const rb = SandboxInstance.playerList[b];
  if (random(ra.status + rb.status + 1) < ra.status + 1) {
    ra.log = [SandboxInstance.timesRun, ra.location.x, b, rb.status, true];
    rb.log = [SandboxInstance.timesRun, rb.location.x, a, rb.status, false];

    ra.win(rb.status);

    rb.dead();

    return 1;
  } else {
    rb.log = [SandboxInstance.timesRun, rb.location.x, a, rb.status, true];
    ra.log = [SandboxInstance.timesRun, ra.location.x, b, rb.status, false];

    rb.win(ra.status);

    ra.dead();

    return 0;
  }
}

export function reval(target: Player): void {
  if (target.status > -1) {
    throw "Living cannot reval: " + target;
  } else {
    target.status = 0;
    target.location.x = random(SandboxInstance.sandboxMapSize - 1);
    SandboxInstance.map[target.location.x].push(target.id);
  }
}

export function fixLocation(a: number): number {
  while (a < 0) {
    a = a + SandboxInstance.sandboxMapSize;
  }
  while (a >= SandboxInstance.sandboxMapSize) {
    a = a - SandboxInstance.sandboxMapSize;
  }
  return a;
}

// 这个函数将坐标限制在MapSize范围内，使得这个坐标系实际上是一个一维封闭坐标系，可以考虑每次坐标处理都套一层这个函数
