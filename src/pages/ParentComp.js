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
import { ItemProvider } from './ItemProvider'


export default function ParentComp() {
    return (
        <div>
            <ItemProvider>
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
            </ItemProvider>
        </div>
    )
}
