/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaQuizArgs() { }
/** @type {?|undefined} */
KalturaQuizArgs.prototype.uiAttributes;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showResultOnAnswer;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showCorrectKeyOnAnswer;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.allowAnswerUpdate;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showCorrectAfterSubmission;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.allowDownload;
/** @type {?|undefined} */
KalturaQuizArgs.prototype.showGradeAfterSubmission;
var KalturaQuiz = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaQuiz, _super);
    function KalturaQuiz(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.uiAttributes === 'undefined')
            _this.uiAttributes = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaQuiz.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaQuiz' },
            version: { type: 'n', readOnly: true },
            uiAttributes: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' },
            showResultOnAnswer: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            showCorrectKeyOnAnswer: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            allowAnswerUpdate: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            showCorrectAfterSubmission: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            allowDownload: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            showGradeAfterSubmission: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaQuiz;
}(KalturaObjectBase));
export { KalturaQuiz };
if (false) {
    /** @type {?} */
    KalturaQuiz.prototype.version;
    /** @type {?} */
    KalturaQuiz.prototype.uiAttributes;
    /** @type {?} */
    KalturaQuiz.prototype.showResultOnAnswer;
    /** @type {?} */
    KalturaQuiz.prototype.showCorrectKeyOnAnswer;
    /** @type {?} */
    KalturaQuiz.prototype.allowAnswerUpdate;
    /** @type {?} */
    KalturaQuiz.prototype.showCorrectAfterSubmission;
    /** @type {?} */
    KalturaQuiz.prototype.allowDownload;
    /** @type {?} */
    KalturaQuiz.prototype.showGradeAfterSubmission;
}
typesMappingStorage['KalturaQuiz'] = KalturaQuiz;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVF1aXouanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFRdWl6LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbEYsSUFBQTtJQUFpQyx1Q0FBaUI7SUFXOUMscUJBQVksSUFBdUI7UUFBbkMsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7S0FDeEU7Ozs7SUFFUyxrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNoRyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3JILHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDekgsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUNwSCwwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzdILGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ2hILHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDbEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQkFwREw7RUFpQmlDLGlCQUFpQixFQW9DakQsQ0FBQTtBQXBDRCx1QkFvQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUtleVZhbHVlIH0gZnJvbSAnLi9LYWx0dXJhS2V5VmFsdWUnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVF1aXpBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgdWlBdHRyaWJ1dGVzPyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRzaG93UmVzdWx0T25BbnN3ZXI/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0c2hvd0NvcnJlY3RLZXlPbkFuc3dlcj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRhbGxvd0Fuc3dlclVwZGF0ZT8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG93Q29ycmVjdEFmdGVyU3VibWlzc2lvbj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRhbGxvd0Rvd25sb2FkPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3dHcmFkZUFmdGVyU3VibWlzc2lvbj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUXVpeiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IHZlcnNpb24gOiBudW1iZXI7XG5cdHVpQXR0cmlidXRlcyA6IEthbHR1cmFLZXlWYWx1ZVtdO1xuXHRzaG93UmVzdWx0T25BbnN3ZXIgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG93Q29ycmVjdEtleU9uQW5zd2VyIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0YWxsb3dBbnN3ZXJVcGRhdGUgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG93Q29ycmVjdEFmdGVyU3VibWlzc2lvbiA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGFsbG93RG93bmxvYWQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG93R3JhZGVBZnRlclN1Ym1pc3Npb24gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUXVpekFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVpQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMudWlBdHRyaWJ1dGVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVF1aXonIH0sXG5cdFx0XHRcdHZlcnNpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHR1aUF0dHJpYnV0ZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFLZXlWYWx1ZSwgc3ViVHlwZSA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdHNob3dSZXN1bHRPbkFuc3dlciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0c2hvd0NvcnJlY3RLZXlPbkFuc3dlciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0YWxsb3dBbnN3ZXJVcGRhdGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHNob3dDb3JyZWN0QWZ0ZXJTdWJtaXNzaW9uIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRhbGxvd0Rvd25sb2FkIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRzaG93R3JhZGVBZnRlclN1Ym1pc3Npb24gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFRdWl6J10gPSBLYWx0dXJhUXVpejsiXX0=