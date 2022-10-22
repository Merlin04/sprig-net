declare global {
	var setSolids: (solids: any[]) => void;
	var setPushables: (pushTable: {
		[key: string | number | symbol]: any[];
	}) => void;
	var setLegend: (...bitmaps: [string, any][]) => void;
	var setBackground: (..._: any[]) => any;
	var addText: (str: string, opts?: object) => void;
	var clearText: () => void;
	var setMap: (map: string) => any;
	var addSprite: (..._: any[]) => any;
	var clearTile: (..._: any[]) => any;
	var getGrid: (..._: any[]) => any;
	var getTile: (..._: any[]) => any;
	var getFirst: (..._: any[]) => any;
	var getAll: (..._: any[]) => any;
	var tilesWith: (..._: any[]) => any;
	var width: any;
	var height: any;
	var bitmap: (strings: string[], ...interps: any[]) => string;
	var tune: (strings: string[], ...interps: any[]) => string;
	var map: (strings: string[], ...interps: any[]) => string;
	var onInput: (key: string, fn: (..._: any[]) => any) => void;
	var afterInput: (fn: (..._: any[]) => any) => void;
	var playTune: () => void;
}

export {};