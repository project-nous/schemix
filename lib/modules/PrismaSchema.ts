import { PrismaModel } from "@/modules/PrismaModel";

export class PrismaSchema {
	private models: Map<string, PrismaModel> = new Map();
	
	constructor() {};

	createModel(modelName: string) {
		const model = new PrismaModel(modelName);
		this.models.set(modelName, model);
		return model;
	};

	toString() {
		const models = [...this.models.values()];
		return models.map((model) => model.toString()).join("\n\n");
	};
};