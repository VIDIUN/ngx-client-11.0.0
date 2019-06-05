/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams } from './KalturaAssetParams';
/**
 * @record
 */
export function KalturaAssetParamsOutputArgs() { }
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetParamsId;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetParamsVersion;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetId;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.assetVersion;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.readyBehavior;
/** @type {?|undefined} */
KalturaAssetParamsOutputArgs.prototype.format;
export class KalturaAssetParamsOutput extends KalturaAssetParams {
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
            objectType: { type: 'c', default: 'KalturaAssetParamsOutput' },
            assetParamsId: { type: 'n' },
            assetParamsVersion: { type: 's' },
            assetId: { type: 's' },
            assetVersion: { type: 's' },
            readyBehavior: { type: 'n' },
            format: { type: 'es', subTypeConstructor: KalturaContainerFormat, subType: 'KalturaContainerFormat' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetParamsId;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetParamsVersion;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetId;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.assetVersion;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.readyBehavior;
    /** @type {?} */
    KalturaAssetParamsOutput.prototype.format;
}
typesMappingStorage['KalturaAssetParamsOutput'] = KalturaAssetParamsOutput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zT3V0cHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxGLE1BQU0sK0JBQWdDLFNBQVEsa0JBQWtCOzs7O0lBUzVELFlBQVksSUFBb0M7UUFFNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdFLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udGFpbmVyRm9ybWF0IH0gZnJvbSAnLi9LYWx0dXJhQ29udGFpbmVyRm9ybWF0JztcbmltcG9ydCB7IEthbHR1cmFBc3NldFBhcmFtcywgS2FsdHVyYUFzc2V0UGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0UGFyYW1zJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXRBcmdzICBleHRlbmRzIEthbHR1cmFBc3NldFBhcmFtc0FyZ3Mge1xuICAgIGFzc2V0UGFyYW1zSWQ/IDogbnVtYmVyO1xuXHRhc3NldFBhcmFtc1ZlcnNpb24/IDogc3RyaW5nO1xuXHRhc3NldElkPyA6IHN0cmluZztcblx0YXNzZXRWZXJzaW9uPyA6IHN0cmluZztcblx0cmVhZHlCZWhhdmlvcj8gOiBudW1iZXI7XG5cdGZvcm1hdD8gOiBLYWx0dXJhQ29udGFpbmVyRm9ybWF0O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXQgZXh0ZW5kcyBLYWx0dXJhQXNzZXRQYXJhbXMge1xuXG4gICAgYXNzZXRQYXJhbXNJZCA6IG51bWJlcjtcblx0YXNzZXRQYXJhbXNWZXJzaW9uIDogc3RyaW5nO1xuXHRhc3NldElkIDogc3RyaW5nO1xuXHRhc3NldFZlcnNpb24gOiBzdHJpbmc7XG5cdHJlYWR5QmVoYXZpb3IgOiBudW1iZXI7XG5cdGZvcm1hdCA6IEthbHR1cmFDb250YWluZXJGb3JtYXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldFBhcmFtc091dHB1dEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXQnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRWZXJzaW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlYWR5QmVoYXZpb3IgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9ybWF0IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRhaW5lckZvcm1hdCwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGFpbmVyRm9ybWF0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXNzZXRQYXJhbXNPdXRwdXQnXSA9IEthbHR1cmFBc3NldFBhcmFtc091dHB1dDsiXX0=