export class Game {

    static readonly AURTHUR_WIN = -1
    static readonly MORDRED_WIN = -2

    static readonly PHASE_SELECT = 1
    static readonly PHASE_VOTE = 2
    static readonly PHASE_VOTE_WAIT = 3
    static readonly PHASE_MISSION = 4
    static readonly PHASE_MISSION_WAIT = 5

    static readonly VOTE_NONE = 0
    static readonly VOTE_ACCEPT = 1
    static readonly VOTE_REJECT = 2

    static readonly ROLE_AUTHURIAN_KNIGHT = 0
    static readonly ROLE_MINION_OF_MORDRED = 1
    static readonly ROLE_MERLIN = 2
    static readonly ROLE_MORDRED = 3

    static Game() {
      const ret = Game
      return ret
    }

    gameId: number
  
    players: {id:number, name: String, isSelected: boolean, vote: number, role: number}[]

    missions: number[]
    currentMission: number

    rejectionCount: number
    lastMissionResult: boolean[]
    phase: number
    leaderId: number

    playerId: number

    gameName: String
  
    operationCount: number

    constructor() {
    }
}