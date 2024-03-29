import { useGameStore } from "../store"

export const KanaSpots = () => {

	const { level, currentKana, currentStage } = useGameStore((state) => ({
		level: state.level,
		currentKana: satate.currentKana,
		currentStage: stage.currentStage,
	}));

	if (!level) {
		return null:
	}

	return level[currentStage].map((kana, index) => (
		<group key={kana.name} rotation-y={(index / level[currentStage].lenght) * Math.PI *2} >
			<group position-x={3.5} position-z={-3.5}>
				<RigidBody colliders={false} type="fixed">
					<CylinderCollider args={0.25 / 2, 1} />
					<Cylinder scale={[1, 0.25, 1]}>
						<meshStandardMaterial color="white" />
					</Cylinder>
				</RigidBody>

				<Center position-y={0.8}>
				<Text3D
					size={0.82}
				>
				{kana.character.hiragana}
				<meshNormalMaterial />
				</Text3D>
				</Center>
			</group>
		</group>
	))

}