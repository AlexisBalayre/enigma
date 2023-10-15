import { NewCollectionDeployed as NewCollectionDeployedEvent } from "../generated/Factory/Factory"
import { NewCollectionDeployed } from "../generated/schema"

export function handleNewCollectionDeployed(
  event: NewCollectionDeployedEvent
): void {
  let entity = new NewCollectionDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collectionAddress = event.params.collectionAddress
  entity.name = event.params.name
  entity.symbol = event.params.symbol

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
