import { map, orderBy, random, slice } from "lodash";
import { Player } from "./player";
import { battle, reval } from "./util";
interface Sandbox {
  playerList: Player[];
  map: number[][];
  internalTurn: number;
  expRecord: number;
  timesRun: number;
  deadPlayerList: number[];
  totalExp: number;
  modelPause: boolean;
  sandboxMapSize: number;
  sandboxCapicity: number;
  getLeaderBoard(number: number): number[];
  updateHighest(): number;
  initMap(): void;
  initPlayer(): void;
  initModel(): void;
  revalStage(): void;
  moveStage(): void;
  battleStage(): void;
  run(turns: number): void;
}

/* 生成沙盒对象 */
export const SandboxInstance: Sandbox = {
  sandboxMapSize: 0,
  sandboxCapicity: 0,

  playerList: [],
  // 玩家列表

  map: [],
  // 地图

  internalTurn: 0,
  // 本次运行到的回合数

  timesRun: 0,
  // 沙盒运行过的次数

  expRecord: 0,
  // 

  modelPause: false,

  get deadPlayerList() {
    const a: number[] = [];
    this.playerList.forEach((element: Player) => {
      if (element.status < 0) {
        a.push(element.id);
      }
    });
    return a;
  },

  get totalExp() {
    let exp = 0;
    this.playerList.forEach((element) => {
      if (element.status > 0) {
        exp = exp + element.status;
      }
    });
    return exp;
  },

  getLeaderBoard(number: number) {
    let array = this.playerList;
    array = orderBy(array, ["status"], ["desc"]);
    return slice(map(array, "id"), number);
  },

  updateHighest() {
    const h = orderBy(this.playerList, "highestExp", "desc");
    if (h[0].highestExp > this.expRecord) {
      this.expRecord = h[0].highestExp;
      return h[0].highestExp;
    }
    return this.expRecord;
  },

  initMap() {
    this.map = [];
    for (let index = 0; index < this.sandboxMapSize; index++) {
      this.map.push([]);
    }
  },

  initPlayer() {
    this.playerList = [];
    for (let index = 0; index < this.sandboxCapicity; index++) {
      const i = new Player(index);
      i.location.x = random(this.sandboxMapSize - 1); // 赋予初始位置，防止之后出错，如果以后添加 y 坐标必须要也添加一个
      this.map[i.location.x].push(i.id);
      i.battleLog = [];
      this.playerList.push(i);
    }
  },
  // 定义玩家初始化函数，生成指定数量的玩家，并填入玩家列表

  initModel() {
    SandboxInstance.initMap();
    SandboxInstance.initPlayer();
    SandboxInstance.internalTurn = 0;
    SandboxInstance.expRecord = 0;
  },

  run(turns) {
    while (turns > 0) {
      if (this.modelPause) {
        break;
      }

      this.revalStage();
      this.moveStage();
      this.battleStage();
      this.updateHighest();

      this.internalTurn++;

      turns--;
    }
  },
  revalStage() {
    SandboxInstance.playerList.forEach((element) => {
      if (element.status < 0) {
        reval(element);
      }
    });
  },

  moveStage() {
    SandboxInstance.playerList.forEach((element) => {
      element.move(random(-1, 1));
    });
  },

  battleStage() {
    SandboxInstance.map.forEach((element) => {
      battle(element);
    });
  },
};
