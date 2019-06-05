/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGoogleSyndicationFeedAdultValues } from './KalturaGoogleSyndicationFeedAdultValues';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
/**
 * @record
 */
export function KalturaGoogleVideoSyndicationFeedArgs() { }
/** @type {?|undefined} */
KalturaGoogleVideoSyndicationFeedArgs.prototype.adultContent;
var KalturaGoogleVideoSyndicationFeed = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGoogleVideoSyndicationFeed, _super);
    function KalturaGoogleVideoSyndicationFeed(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaGoogleVideoSyndicationFeed.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGoogleVideoSyndicationFeed' },
            adultContent: { type: 'es', subTypeConstructor: KalturaGoogleSyndicationFeedAdultValues, subType: 'KalturaGoogleSyndicationFeedAdultValues' }
        });
        return result;
    };
    return KalturaGoogleVideoSyndicationFeed;
}(KalturaBaseSyndicationFeed));
export { KalturaGoogleVideoSyndicationFeed };
if (false) {
    /** @type {?} */
    KalturaGoogleVideoSyndicationFeed.prototype.adultContent;
}
typesMappingStorage['KalturaGoogleVideoSyndicationFeed'] = KalturaGoogleVideoSyndicationFeed;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdvb2dsZVZpZGVvU3luZGljYXRpb25GZWVkLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhR29vZ2xlVmlkZW9TeW5kaWNhdGlvbkZlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBTzFHLElBQUE7SUFBdUQsNkRBQTBCO0lBSTdFLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7U0FDeEksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0E5Qkw7RUFVdUQsMEJBQTBCLEVBcUJoRixDQUFBO0FBckJELDZDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHb29nbGVTeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcyB9IGZyb20gJy4vS2FsdHVyYUdvb2dsZVN5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzJztcbmltcG9ydCB7IEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkLCBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhR29vZ2xlVmlkZW9TeW5kaWNhdGlvbkZlZWRBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkQXJncyB7XG4gICAgYWR1bHRDb250ZW50PyA6IEthbHR1cmFHb29nbGVTeW5kaWNhdGlvbkZlZWRBZHVsdFZhbHVlcztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdvb2dsZVZpZGVvU3luZGljYXRpb25GZWVkIGV4dGVuZHMgS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQge1xuXG4gICAgYWR1bHRDb250ZW50IDogS2FsdHVyYUdvb2dsZVN5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhR29vZ2xlVmlkZW9TeW5kaWNhdGlvbkZlZWRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUdvb2dsZVZpZGVvU3luZGljYXRpb25GZWVkJyB9LFxuXHRcdFx0XHRhZHVsdENvbnRlbnQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR29vZ2xlU3luZGljYXRpb25GZWVkQWR1bHRWYWx1ZXMsIHN1YlR5cGUgOiAnS2FsdHVyYUdvb2dsZVN5bmRpY2F0aW9uRmVlZEFkdWx0VmFsdWVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhR29vZ2xlVmlkZW9TeW5kaWNhdGlvbkZlZWQnXSA9IEthbHR1cmFHb29nbGVWaWRlb1N5bmRpY2F0aW9uRmVlZDsiXX0=