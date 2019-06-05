/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaAccessControlMessage } from './KalturaAccessControlMessage';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPlaybackContextArgs() { }
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.sources;
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.flavorAssets;
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.actions;
/** @type {?|undefined} */
KalturaPlaybackContextArgs.prototype.messages;
var KalturaPlaybackContext = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlaybackContext, _super);
    function KalturaPlaybackContext(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.sources === 'undefined')
            _this.sources = [];
        if (typeof _this.flavorAssets === 'undefined')
            _this.flavorAssets = [];
        if (typeof _this.actions === 'undefined')
            _this.actions = [];
        if (typeof _this.messages === 'undefined')
            _this.messages = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPlaybackContext.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlaybackContext' },
            sources: { type: 'a', subTypeConstructor: KalturaPlaybackSource, subType: 'KalturaPlaybackSource' },
            flavorAssets: { type: 'a', subTypeConstructor: KalturaFlavorAsset, subType: 'KalturaFlavorAsset' },
            actions: { type: 'a', subTypeConstructor: KalturaRuleAction, subType: 'KalturaRuleAction' },
            messages: { type: 'a', subTypeConstructor: KalturaAccessControlMessage, subType: 'KalturaAccessControlMessage' }
        });
        return result;
    };
    return KalturaPlaybackContext;
}(KalturaObjectBase));
export { KalturaPlaybackContext };
if (false) {
    /** @type {?} */
    KalturaPlaybackContext.prototype.sources;
    /** @type {?} */
    KalturaPlaybackContext.prototype.flavorAssets;
    /** @type {?} */
    KalturaPlaybackContext.prototype.actions;
    /** @type {?} */
    KalturaPlaybackContext.prototype.messages;
}
typesMappingStorage['KalturaPlaybackContext'] = KalturaPlaybackContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXliYWNrQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXliYWNrQ29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsSUFBQTtJQUE0QyxrREFBaUI7SUFPekQsZ0NBQVksSUFBa0M7UUFBOUMsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FLZDtRQUpHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDckUsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7S0FDMUQ7Ozs7SUFFUyw2Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN0RyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUMvRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUMzRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQTlDTDtFQWdCNEMsaUJBQWlCLEVBK0I1RCxDQUFBO0FBL0JELGtDQStCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YmFja1NvdXJjZSB9IGZyb20gJy4vS2FsdHVyYVBsYXliYWNrU291cmNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldCB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0JztcbmltcG9ydCB7IEthbHR1cmFSdWxlQWN0aW9uIH0gZnJvbSAnLi9LYWx0dXJhUnVsZUFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhQWNjZXNzQ29udHJvbE1lc3NhZ2UgfSBmcm9tICcuL0thbHR1cmFBY2Nlc3NDb250cm9sTWVzc2FnZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXliYWNrQ29udGV4dEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBzb3VyY2VzPyA6IEthbHR1cmFQbGF5YmFja1NvdXJjZVtdO1xuXHRmbGF2b3JBc3NldHM/IDogS2FsdHVyYUZsYXZvckFzc2V0W107XG5cdGFjdGlvbnM/IDogS2FsdHVyYVJ1bGVBY3Rpb25bXTtcblx0bWVzc2FnZXM/IDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xNZXNzYWdlW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5YmFja0NvbnRleHQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBzb3VyY2VzIDogS2FsdHVyYVBsYXliYWNrU291cmNlW107XG5cdGZsYXZvckFzc2V0cyA6IEthbHR1cmFGbGF2b3JBc3NldFtdO1xuXHRhY3Rpb25zIDogS2FsdHVyYVJ1bGVBY3Rpb25bXTtcblx0bWVzc2FnZXMgOiBLYWx0dXJhQWNjZXNzQ29udHJvbE1lc3NhZ2VbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXliYWNrQ29udGV4dEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNvdXJjZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnNvdXJjZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuZmxhdm9yQXNzZXRzID09PSAndW5kZWZpbmVkJykgdGhpcy5mbGF2b3JBc3NldHMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuYWN0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuYWN0aW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tZXNzYWdlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWJhY2tDb250ZXh0JyB9LFxuXHRcdFx0XHRzb3VyY2VzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWJhY2tTb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrU291cmNlJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JBc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yQXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSdWxlQWN0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFSdWxlQWN0aW9uJyB9LFxuXHRcdFx0XHRtZXNzYWdlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xNZXNzYWdlLCBzdWJUeXBlIDogJ0thbHR1cmFBY2Nlc3NDb250cm9sTWVzc2FnZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBsYXliYWNrQ29udGV4dCddID0gS2FsdHVyYVBsYXliYWNrQ29udGV4dDsiXX0=