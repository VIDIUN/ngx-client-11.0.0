/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaTranscriptAsset = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTranscriptAsset, _super);
    function KalturaTranscriptAsset(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTranscriptAsset.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTranscriptAsset' },
            accuracy: { type: 'n' },
            humanVerified: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            language: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            providerType: { type: 'es', subTypeConstructor: KalturaTranscriptProviderType, subType: 'KalturaTranscriptProviderType' }
        });
        return result;
    };
    return KalturaTranscriptAsset;
}(KalturaAttachmentAsset));
export { KalturaTranscriptAsset };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRyYW5zY3JpcHRBc3NldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRyYW5zY3JpcHRBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTlGLElBQUE7SUFBNEMsa0RBQXNCO0lBTzlELGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNoSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDN0YsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDcEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F6Q0w7RUFlNEMsc0JBQXNCLEVBMkJqRSxDQUFBO0FBM0JELGtDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUxhbmd1YWdlIH0gZnJvbSAnLi9LYWx0dXJhTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRyYW5zY3JpcHRQcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFUcmFuc2NyaXB0UHJvdmlkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFBdHRhY2htZW50QXNzZXQsIEthbHR1cmFBdHRhY2htZW50QXNzZXRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXR0YWNobWVudEFzc2V0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVHJhbnNjcmlwdEFzc2V0QXJncyAgZXh0ZW5kcyBLYWx0dXJhQXR0YWNobWVudEFzc2V0QXJncyB7XG4gICAgYWNjdXJhY3k/IDogbnVtYmVyO1xuXHRodW1hblZlcmlmaWVkPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGxhbmd1YWdlPyA6IEthbHR1cmFMYW5ndWFnZTtcblx0cHJvdmlkZXJUeXBlPyA6IEthbHR1cmFUcmFuc2NyaXB0UHJvdmlkZXJUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVHJhbnNjcmlwdEFzc2V0IGV4dGVuZHMgS2FsdHVyYUF0dGFjaG1lbnRBc3NldCB7XG5cbiAgICBhY2N1cmFjeSA6IG51bWJlcjtcblx0aHVtYW5WZXJpZmllZCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGxhbmd1YWdlIDogS2FsdHVyYUxhbmd1YWdlO1xuXHRwcm92aWRlclR5cGUgOiBLYWx0dXJhVHJhbnNjcmlwdFByb3ZpZGVyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRyYW5zY3JpcHRBc3NldEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVHJhbnNjcmlwdEFzc2V0JyB9LFxuXHRcdFx0XHRhY2N1cmFjeSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRodW1hblZlcmlmaWVkIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRsYW5ndWFnZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMYW5ndWFnZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGFuZ3VhZ2UnIH0sXG5cdFx0XHRcdHByb3ZpZGVyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFUcmFuc2NyaXB0UHJvdmlkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFUcmFuc2NyaXB0UHJvdmlkZXJUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVHJhbnNjcmlwdEFzc2V0J10gPSBLYWx0dXJhVHJhbnNjcmlwdEFzc2V0OyJdfQ==