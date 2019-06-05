/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbAssetStatus } from './KalturaThumbAssetStatus';
import { KalturaAsset } from './KalturaAsset';
/**
 * @record
 */
export function KalturaThumbAssetArgs() { }
/** @type {?|undefined} */
KalturaThumbAssetArgs.prototype.thumbParamsId;
export class KalturaThumbAsset extends KalturaAsset {
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
            objectType: { type: 'c', default: 'KalturaThumbAsset' },
            thumbParamsId: { type: 'n' },
            width: { type: 'n', readOnly: true },
            height: { type: 'n', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaThumbAssetStatus, subType: 'KalturaThumbAssetStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaThumbAsset.prototype.thumbParamsId;
    /** @type {?} */
    KalturaThumbAsset.prototype.width;
    /** @type {?} */
    KalturaThumbAsset.prototype.height;
    /** @type {?} */
    KalturaThumbAsset.prototype.status;
}
typesMappingStorage['KalturaThumbAsset'] = KalturaThumbAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iQXNzZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFUaHVtYkFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQU9oRSxNQUFNLHdCQUF5QixTQUFRLFlBQVk7Ozs7SUFPL0MsWUFBWSxJQUE2QjtRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDdEUsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3hDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7U0FDbkgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRodW1iQXNzZXRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFUaHVtYkFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFBc3NldCwgS2FsdHVyYUFzc2V0QXJncyB9IGZyb20gJy4vS2FsdHVyYUFzc2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJBc3NldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0QXJncyB7XG4gICAgdGh1bWJQYXJhbXNJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUaHVtYkFzc2V0IGV4dGVuZHMgS2FsdHVyYUFzc2V0IHtcblxuICAgIHRodW1iUGFyYW1zSWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHdpZHRoIDogbnVtYmVyO1xuXHRyZWFkb25seSBoZWlnaHQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFUaHVtYkFzc2V0U3RhdHVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVGh1bWJBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJBc3NldCcgfSxcblx0XHRcdFx0dGh1bWJQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3aWR0aCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGhlaWdodCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iQXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVRodW1iQXNzZXRTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUaHVtYkFzc2V0J10gPSBLYWx0dXJhVGh1bWJBc3NldDsiXX0=