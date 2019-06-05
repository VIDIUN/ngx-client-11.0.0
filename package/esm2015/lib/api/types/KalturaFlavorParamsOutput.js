/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
/**
 * @record
 */
export function KalturaFlavorParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorParamsId;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.commandLinesStr;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorParamsVersion;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.flavorAssetVersion;
/** @type {?|undefined} */
KalturaFlavorParamsOutputArgs.prototype.readyBehavior;
export class KalturaFlavorParamsOutput extends KalturaFlavorParams {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFlavorParamsOutput' },
            flavorParamsId: { type: 'n' },
            commandLinesStr: { type: 's' },
            flavorParamsVersion: { type: 's' },
            flavorAssetId: { type: 's' },
            flavorAssetVersion: { type: 's' },
            readyBehavior: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorParamsId;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.commandLinesStr;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorParamsVersion;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorAssetId;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.flavorAssetVersion;
    /** @type {?} */
    KalturaFlavorParamsOutput.prototype.readyBehavior;
}
typesMappingStorage['KalturaFlavorParamsOutput'] = KalturaFlavorParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZckYsTUFBTSxnQ0FBaUMsU0FBUSxtQkFBbUI7Ozs7SUFTOUQsWUFBWSxJQUFxQztRQUU3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zLCBLYWx0dXJhRmxhdm9yUGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZsYXZvclBhcmFtc0FyZ3Mge1xuICAgIGZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcblx0Y29tbWFuZExpbmVzU3RyPyA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zVmVyc2lvbj8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldFZlcnNpb24/IDogc3RyaW5nO1xuXHRyZWFkeUJlaGF2aW9yPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCBleHRlbmRzIEthbHR1cmFGbGF2b3JQYXJhbXMge1xuXG4gICAgZmxhdm9yUGFyYW1zSWQgOiBudW1iZXI7XG5cdGNvbW1hbmRMaW5lc1N0ciA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zVmVyc2lvbiA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRWZXJzaW9uIDogc3RyaW5nO1xuXHRyZWFkeUJlaGF2aW9yIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXQnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbW1hbmRMaW5lc1N0ciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlYWR5QmVoYXZpb3IgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dCddID0gS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dDsiXX0=