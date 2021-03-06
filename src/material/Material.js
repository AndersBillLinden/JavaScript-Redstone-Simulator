/*
 * JavaScript Redstone Simulator
 * Copyright (C) 2012  Jonathan Lydall (Email: jonathan.lydall@gmail.com)
 * 
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA. 
 * 
 */

(function(){
	var namespace = com.mordritch.mcSim;
	var MapColor = namespace.MapColor;
	
	namespace.Material = {
		air: new namespace.MaterialTransparent(MapColor.airColor),
		grass: new namespace.Material_(MapColor.grassColor),
		ground: new namespace.Material_(MapColor.dirtColor),
		wood: (new namespace.Material_(MapColor.woodColor)).setBurning(),
		rock: (new namespace.Material_(MapColor.stoneColor)).setNoHarvest(),
		iron: (new namespace.Material_(MapColor.ironColor)).setNoHarvest(),
		water: (new namespace.MaterialLiquid(MapColor.waterColor)).setNoPushMobility(),
		lava: (new namespace.MaterialLiquid(MapColor.tntColor)).setNoPushMobility(),
		leaves: (new namespace.Material_(MapColor.foliageColor)).setBurning().setTranslucent().setNoPushMobility(),
		plants: (new namespace.MaterialLogic(MapColor.foliageColor)).setNoPushMobility(),
		vine: (new namespace.MaterialLogic(MapColor.foliageColor)).setBurning().setNoPushMobility().setGroundCover(),
		sponge: new namespace.Material_(MapColor.clothColor),
		cloth: (new namespace.Material_(MapColor.clothColor)).setBurning(),
		fire: (new namespace.MaterialTransparent(MapColor.airColor)).setNoPushMobility(),
		sand: new namespace.Material_(MapColor.sandColor),
		circuits: (new namespace.MaterialLogic(MapColor.airColor)).setNoPushMobility(),
		glass: (new namespace.Material_(MapColor.airColor)).setTranslucent(),
		redstoneLight: new namespace.Material_(MapColor.airColor),
		tnt: (new namespace.Material_(MapColor.tntColor)).setBurning().setTranslucent(),
		unused: (new namespace.Material_(MapColor.foliageColor)).setNoPushMobility(),
		ice: (new namespace.Material_(MapColor.iceColor)).setTranslucent(),
		snow: (new namespace.MaterialLogic(MapColor.snowColor)).setGroundCover().setTranslucent().setNoHarvest().setNoPushMobility(),
		craftedSnow: (new namespace.Material_(MapColor.snowColor)).setNoHarvest(),
		cactus: (new namespace.Material_(MapColor.foliageColor)).setTranslucent().setNoPushMobility(),
		clay: new namespace.Material_(MapColor.clayColor),
		pumpkin: (new namespace.Material_(MapColor.foliageColor)).setNoPushMobility(),
		dragonEgg: (new namespace.Material_(MapColor.foliageColor)).setNoPushMobility(),
		portal: (new namespace.MaterialPortal(MapColor.airColor)).setImmovableMobility(),
		cake: (new namespace.Material_(MapColor.airColor)).setNoPushMobility(),
		web: (new namespace.MaterialWeb(MapColor.clothColor)).setNoHarvest().setNoPushMobility(),
		piston: (new namespace.Material_(MapColor.stoneColor)).setImmovableMobility()
	};
})();
