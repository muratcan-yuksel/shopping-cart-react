import React from 'react'
import CheckOut from './CheckOut'
import AnarchismPage from './AnarchismPage'
import HobgoblinPage from "./HobgoblinPage"
import MadMarxBlackPage from "./MadMarxBlackPage"
import MadMarxPage from "./MadMarxPage"
import MarxLemonPage from "./MarxLemonPage"
import PhilosophyClubPage from "./PhilosophyClubPage"
import RadicalFreedomPage from "./RadicalFreedomPage"
import RevolutionPage from "./RevolutionPage"
import UpsideHegelPage from "./UpsideHegelPage"
import WrongHegelPage from "./WrongHegelPage"

export default function ParentComp() {
    return (
        <div>
            <CheckOut />
            <AnarchismPage />
            <HobgoblinPage />
            <MadMarxBlackPage />
            <MadMarxPage />
            <MarxLemonPage />
            <PhilosophyClubPage />
            <RadicalFreedomPage />
            < RevolutionPage />
            <UpsideHegelPage />
            <WrongHegelPage />
        </div>
    )
}
