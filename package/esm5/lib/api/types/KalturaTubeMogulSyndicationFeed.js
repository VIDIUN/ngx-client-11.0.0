/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaTubeMogulSyndicationFeedCategories } from './KalturaTubeMogulSyndicationFeedCategories';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
/**
 * @record
 */
export function KalturaTubeMogulSyndicationFeedArgs() { }
var KalturaTubeMogulSyndicationFeed = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTubeMogulSyndicationFeed, _super);
    function KalturaTubeMogulSyndicationFeed(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTubeMogulSyndicationFeed.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTubeMogulSyndicationFeed' },
            category: { type: 'es', readOnly: true, subTypeConstructor: KalturaTubeMogulSyndicationFeedCategories, subType: 'KalturaTubeMogulSyndicationFeedCategories' }
        });
        return result;
    };
    return KalturaTubeMogulSyndicationFeed;
}(KalturaBaseSyndicationFeed));
export { KalturaTubeMogulSyndicationFeed };
if (false) {
    /** @type {?} */
    KalturaTubeMogulSyndicationFeed.prototype.category;
}
typesMappingStorage['KalturaTubeMogulSyndicationFeed'] = KalturaTubeMogulSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBTzFHLElBQUE7SUFBcUQsMkRBQTBCO0lBSTNFLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlDQUF5QyxFQUFFLE9BQU8sRUFBRywyQ0FBMkMsRUFBRTtTQUN6SixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQTlCTDtFQVVxRCwwQkFBMEIsRUFxQjlFLENBQUE7QUFyQkQsMkNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMgfSBmcm9tICcuL0thbHR1cmFUdWJlTW9ndWxTeW5kaWNhdGlvbkZlZWRDYXRlZ29yaWVzJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLCBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVHViZU1vZ3VsU3luZGljYXRpb25GZWVkQXJncyAgZXh0ZW5kcyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVHViZU1vZ3VsU3luZGljYXRpb25GZWVkIGV4dGVuZHMgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQge1xuXG4gICAgcmVhZG9ubHkgY2F0ZWdvcnkgOiBLYWx0dXJhVHViZU1vZ3VsU3luZGljYXRpb25GZWVkQ2F0ZWdvcmllcztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVHViZU1vZ3VsU3luZGljYXRpb25GZWVkJyB9LFxuXHRcdFx0XHRjYXRlZ29yeSA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMsIHN1YlR5cGUgOiAnS2FsdHVyYVR1YmVNb2d1bFN5bmRpY2F0aW9uRmVlZENhdGVnb3JpZXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUdWJlTW9ndWxTeW5kaWNhdGlvbkZlZWQnXSA9IEthbHR1cmFUdWJlTW9ndWxTeW5kaWNhdGlvbkZlZWQ7Il19