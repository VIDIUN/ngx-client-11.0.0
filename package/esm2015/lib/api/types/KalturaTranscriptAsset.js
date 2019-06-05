/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaTranscriptProviderType } from './KalturaTranscriptProviderType';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';
/**
 * @record
 */
export function KalturaTranscriptAssetArgs() { }
/** @type {?|undefined} */
KalturaTranscriptAssetArgs.prototype.accuracy;
/** @type {?|undefined} */
KalturaTranscriptAssetArgs.prototype.humanVerified;
/** @type {?|undefined} */
KalturaTranscriptAssetArgs.prototype.language;
/** @type {?|undefined} */
KalturaTranscriptAssetArgs.prototype.providerType;
export class KalturaTranscriptAsset extends KalturaAttachmentAsset {
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
            objectType: { type: 'c', default: 'KalturaTranscriptAsset' },
            accuracy: { type: 'n' },
            humanVerified: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            language: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            providerType: { type: 'es', subTypeConstructor: KalturaTranscriptProviderType, subType: 'KalturaTranscriptProviderType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaTranscriptAsset.prototype.accuracy;
    /** @type {?} */
    KalturaTranscriptAsset.prototype.humanVerified;
    /** @type {?} */
    KalturaTranscriptAsset.prototype.language;
    /** @type {?} */
    KalturaTranscriptAsset.prototype.providerType;
}
typesMappingStorage['KalturaTranscriptAsset'] = KalturaTranscriptAsset;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRyYW5zY3JpcHRBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRyYW5zY3JpcHRBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVOUYsTUFBTSw2QkFBOEIsU0FBUSxzQkFBc0I7Ozs7SUFPOUQsWUFBWSxJQUFrQztRQUUxQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNoSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDN0YsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDcEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2UgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZSc7XG5pbXBvcnQgeyBLYWx0dXJhVHJhbnNjcmlwdFByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYVRyYW5zY3JpcHRQcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUF0dGFjaG1lbnRBc3NldCwgS2FsdHVyYUF0dGFjaG1lbnRBc3NldEFyZ3MgfSBmcm9tICcuL0thbHR1cmFBdHRhY2htZW50QXNzZXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUcmFuc2NyaXB0QXNzZXRBcmdzICBleHRlbmRzIEthbHR1cmFBdHRhY2htZW50QXNzZXRBcmdzIHtcbiAgICBhY2N1cmFjeT8gOiBudW1iZXI7XG5cdGh1bWFuVmVyaWZpZWQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0bGFuZ3VhZ2U/IDogS2FsdHVyYUxhbmd1YWdlO1xuXHRwcm92aWRlclR5cGU/IDogS2FsdHVyYVRyYW5zY3JpcHRQcm92aWRlclR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUcmFuc2NyaXB0QXNzZXQgZXh0ZW5kcyBLYWx0dXJhQXR0YWNobWVudEFzc2V0IHtcblxuICAgIGFjY3VyYWN5IDogbnVtYmVyO1xuXHRodW1hblZlcmlmaWVkIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0bGFuZ3VhZ2UgOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdHByb3ZpZGVyVHlwZSA6IEthbHR1cmFUcmFuc2NyaXB0UHJvdmlkZXJUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVHJhbnNjcmlwdEFzc2V0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUcmFuc2NyaXB0QXNzZXQnIH0sXG5cdFx0XHRcdGFjY3VyYWN5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGh1bWFuVmVyaWZpZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGxhbmd1YWdlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZScgfSxcblx0XHRcdFx0cHJvdmlkZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRyYW5zY3JpcHRQcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVRyYW5zY3JpcHRQcm92aWRlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUcmFuc2NyaXB0QXNzZXQnXSA9IEthbHR1cmFUcmFuc2NyaXB0QXNzZXQ7Il19